'use server';

import { google } from 'googleapis';
import { Resend } from 'resend';
import { z } from 'zod';

type FormState = {
  success: boolean;
  error?: string;
};

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const schema = z.object({
      fullName: z.string().min(1, 'Full name is required'),
      phone: z.string().min(1, 'Phone is required'),
      message: z.string().optional(),
    });

    const data = schema.parse({
      fullName: formData.get('fullName'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    });

    const resend = new Resend(process.env.RESEND_API_KEY);

    if (process.env.CONTACT_RECEIVER_EMAIL) {
      await resend.emails.send({
        from: 'RoomZ Contact <no-reply@roomz.vn>',
        to: process.env.CONTACT_RECEIVER_EMAIL,
        subject: '📩 New Contact Request - RoomZ',
        html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message ?? '-'}</p>
      `,
      });
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    if (process.env.GOOGLE_SHEET_ID) {
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'Sheet1!A:D', // Specify columns instead of a single cell
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: [
            [
              new Date().toLocaleString('vi-VN'),
              data.fullName,
              data.phone,
              data.message ?? '',
            ],
          ],
        },
      });
      return { success: true };
    }

    return { success: false };
  } catch (error) {
    return {
      success: false,
      error: 'Gửi thông tin thất bại. Vui lòng thử lại sau.',
    };
  }
}
