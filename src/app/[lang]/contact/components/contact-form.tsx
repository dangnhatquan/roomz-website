'use client';

import { useFormState, useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { submitContact } from '@/app/[lang]/contact/actions/contact';

type FormState = {
  success: boolean;
  error?: string;
};

const initialState: FormState = {
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      disabled={pending}
      className='rounded-full bg-green-400 px-8 hover:bg-green-400'
    >
      {pending ? 'Đang gửi...' : '➤ Gửi thông tin'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  return (
    <form action={formAction} className='space-y-5'>
      <Input name='fullName' placeholder='Họ và tên' required />

      <Input name='phone' placeholder='Số điện thoại' required />

      <Textarea
        name='message'
        placeholder='Nội dung liên hệ'
        className='min-h-[120px]'
      />

      {state.error && <p className='text-sm text-red-500'>{state.error}</p>}

      {state.success && (
        <p className='text-sm text-green-600'>
          ✔ Gửi thông tin thành công! Chúng tôi sẽ liên hệ sớm.
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
