'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { ContactForm } from '@/app/[lang]/contact/components/contact-form';

export function ContactSection() {
  return (
    <section className='container mx-auto py-16'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
        {/* LEFT INFO */}
        <div>
          <h2 className='text-3xl font-bold'>
            <span className='text-green-400'>Liên hệ</span> với RoomZ
          </h2>

          <p className='mt-4 max-w-md text-muted-foreground'>
            Bạn có câu hỏi, thắc mắc hoặc muốn hợp tác? Hãy gửi thông tin – đội
            ngũ RoomZ sẽ phản hồi trong thời gian sớm nhất.
          </p>

          <div className='mt-10 space-y-6'>
            <div>
              <p className='font-semibold text-green-600'>Hotline</p>
              <p className='text-lg font-medium'>0287 100 7070</p>
            </div>

            <div>
              <p className='font-semibold text-green-600'>Địa chỉ</p>
              <p className='max-w-md'>
                261 Hoàng Văn Thụ, P. Tân Sơn Hoà, TP. Hồ Chí Minh, Việt Nam
              </p>
            </div>

            <div>
              <p className='font-semibold text-green-600'>Email</p>
              <p>info@RoomZ.vn</p>
            </div>

            <div>
              <p className='font-semibold text-green-600'>Mạng xã hội</p>
              <div className='mt-2 flex gap-4 text-xl'>
                <span>📘</span>
                <span>💼</span>
                <span>🎵</span>
                <span>💬</span>
                <span>▶️</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <Card className='shadow-xl'>
          <CardHeader>
            <CardTitle>LIÊN HỆ VỚI CHÚNG TÔI</CardTitle>
          </CardHeader>

          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
