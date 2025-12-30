import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-black text-white'>
      {/* TOP */}
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3'>
        {/* LEFT */}
        <div>
          <h3 className='mb-4 text-lg font-semibold'>
            Trải nghiệm của bạn tại{' '}
            <span className='text-green-400'>RoomZ</span> rất quan trọng với
            chúng tôi
          </h3>
          <p className='mb-6 text-sm text-gray-400'>
            Chia sẻ suy nghĩ của bạn để chúng tôi có thể tạo ra trải nghiệm tốt
            hơn cho bạn lần sau
          </p>
          <Link
            href='/contact'
            className='inline-block rounded-full border border-green-400 px-6 py-2 text-sm text-green-400 transition hover:bg-green-400 hover:text-black'
          >
            Chia sẻ suy nghĩ của bạn
          </Link>
        </div>

        {/* CENTER */}
        <div className='space-y-6'>
          <div>
            <p className='text-sm text-gray-400'>Hotline</p>
            <p className='text-lg font-semibold'>1900 1234 / Zalo OA</p>
          </div>
          <div>
            <p className='text-sm text-gray-400'>Email</p>
            <p className='text-lg font-semibold'>booking@roomz.vn</p>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className='mb-4 font-semibold'>Theo dõi chúng tôi qua</p>
          <div className='flex gap-4'>
            {['facebook', 'instagram', 'tiktok', 'linkedin'].map((icon) => (
              <span
                key={icon}
                className='flex h-10 w-10 items-center justify-center rounded-full border border-white/30 hover:border-green-400'
              >
                {/* icon placeholder */}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className='border-t border-white/10' />

      {/* MIDDLE */}
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4'>
        {/* COLUMN 1 */}
        <div>
          <h4 className='mb-4 text-green-400'>RoomZ</h4>
          <ul className='space-y-2 text-sm text-gray-300'>
            <li>Về chúng tôi</li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className='mb-4 text-green-400'>ĐẶT PHÒNG</h4>
          <ul className='space-y-2 text-sm text-gray-300'>
            <li>Đặt phòng</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 className='mb-4 text-green-400'>CHÍNH SÁCH</h4>
          <ul className='space-y-2 text-sm text-gray-300'>
            <li>Chính sách bảo mật</li>
            <li>Chính sách giao và nhận phòng</li>
            <li>Chính sách đổi, trả phòng và hoàn tiền</li>
            <li>Câu hỏi thường gặp</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h4 className='mb-2 text-green-400'>LIÊN HỆ</h4>
          <p className='text-sm text-gray-400'>
            Giấy phép Dịch vụ Lưu trú số 256/GCN, ngày cấp 05-07-2023, nơi cấp
            Công An Thành Phố Hồ Chí Minh
          </p>

          <div className='mt-4'></div>
        </div>
      </div>

      <div className='border-t border-white/10' />

      {/* BOTTOM */}
      <div className='mx-auto max-w-7xl px-6 py-6 text-sm text-gray-400'>
        © CÔNG TY CỔ PHẦN ROOMZ <br />
        Mã số doanh nghiệp: 0316527995. Giấy chứng nhận đăng ký doanh nghiệp do
        Sở Kế hoạch và Đầu tư TP Hồ Chí Minh cấp ngày 12/10/2020.
      </div>
    </footer>
  );
}
