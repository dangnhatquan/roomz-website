'use client';

import { Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SearchFilterBar() {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [location, setLocation] = useState('');
  const [rentalType, setRentalType] = useState('Chọn loại hình thuê');
  const [priceRange, setPriceRange] = useState('Chọn khoảng giá');
  const [guestCount, setGuestCount] = useState('1-2 người');
  const [selectedCity, setSelectedCity] = useState('Hồ Chí Minh');

  const isExpanded = activeField !== null;

  const handleFieldClick = (field: string | null) => {
    setActiveField(activeField === field ? null : field);
  };

  const handleClose = () => {
    setActiveField(null);
  };

  const rentalTypes = [
    { value: 'nha-tro', label: 'Nhà trọ' },
    { value: 'can-ho', label: 'Căn hộ' },
    { value: 'nha', label: 'Nhà' },
  ];

  const priceRanges = [
    { value: 'under-5', label: 'Dưới 5 triệu' },
    { value: '5-10', label: '5 triệu - 10 triệu' },
    { value: '10-20', label: '10 triệu - 20 triệu' },
    { value: '20-30', label: '20 triệu - 30 triệu' },
    { value: '30-50', label: '30 triệu - 50 triệu' },
    { value: 'over-50', label: 'Trên 50 triệu' },
  ];

  const guestOptions = [
    { value: '1-2', label: '1-2 người' },
    { value: '2-3', label: '2-3 người' },
    { value: '3-4', label: '3-4 người' },
  ];

  return (
    <div className='w-full max-w-6xl mx-auto p-4'>
      {/* Main Search Bar */}
      <div className='bg-white xl:rounded-full rounded-lg shadow-lg p-2 flex flex-col xl:items-center gap-2 relative z-20 xl:flex-row items-start'>
        {/* Location Input */}
        <div
          onClick={() => handleFieldClick('location')}
          className={`flex-1 px-6 py-3 rounded-full transition-colors cursor-pointer ${
            activeField === 'location' ? 'bg-gray-50' : 'hover:bg-gray-50'
          }`}
        >
          <div className='text-xs font-semibold text-green-400 mb-1'>
            Chọn vị trí
          </div>
          {activeField === 'location' ? (
            <Input
              type='text'
              placeholder='Tìm kiếm vị trí'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='text-sm font-medium border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0'
              autoFocus
            />
          ) : (
            <div className='text-sm font-medium text-gray-700'>
              {location || 'Tìm kiếm vị trí'}
            </div>
          )}
        </div>

        {/* Rental Type */}
        <button
          onClick={() => handleFieldClick('rental')}
          className={`flex-1 px-6 py-3 text-left rounded-full transition-colors ${
            activeField === 'rental' ? 'bg-gray-50' : 'hover:bg-gray-50'
          }`}
        >
          <div className='text-xs font-semibold text-green-400 mb-1'>
            Loại hình thuê
          </div>
          <div className='text-sm font-medium text-gray-700'>{rentalType}</div>
        </button>

        {/* Price Range */}
        <button
          onClick={() => handleFieldClick('price')}
          className={`flex-1 px-6 py-3 text-left rounded-full transition-colors ${
            activeField === 'price' ? 'bg-gray-50' : 'hover:bg-gray-50'
          }`}
        >
          <div className='text-xs font-semibold text-green-400 mb-1'>
            Khoảng giá
          </div>
          <div className='text-sm font-medium text-gray-700'>{priceRange}</div>
        </button>

        {/* Guests */}
        <button
          onClick={() => handleFieldClick('guests')}
          className={`flex-1 px-6 py-3 text-left rounded-full transition-colors ${
            activeField === 'guests' ? 'bg-gray-50' : 'hover:bg-gray-50'
          }`}
        >
          <div className='text-xs font-semibold text-green-400 mb-1'>
            Số người
          </div>
          <div className='text-sm font-medium text-gray-700'>{guestCount}</div>
        </button>

        {/* Search Button */}
        <Button className='bg-green-400 w-full xl:w-fit hover:bg-green-400 text-white px-8 py-6 rounded-full'>
          Tìm phòng
        </Button>
      </div>

      {/* Expanded Filters Panel - Shows when any field is clicked */}
      {isExpanded && (
        <>
          {/* Overlay */}
          <div
            className='fixed inset-0 bg-black/20 z-10'
            onClick={handleClose}
          />

          {/* Filters Panel */}
          <div className='relative mt-4 bg-white rounded-2xl shadow-2xl p-6 z-20 animate-in slide-in-from-top-4 duration-300'>
            <button
              onClick={handleClose}
              className='absolute top-4 right-4 text-green-400 hover:text-green-400 font-medium'
            >
              Xóa
            </button>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              {/* Left Column - Filters */}
              <div className='space-y-6'>
                {/* Rental Type Dropdown */}
                {activeField === 'rental' && (
                  <div>
                    <h3 className='font-semibold text-sm mb-1'>
                      Loại hình thuê
                    </h3>
                    <p className='text-xs text-gray-500 mb-3'>
                      Chọn loại hình thuê
                    </p>
                    <div className='space-y-2'>
                      {rentalTypes.map((type) => (
                        <button
                          key={type.value}
                          onClick={() => {
                            setRentalType(type.label);
                            handleClose();
                          }}
                          className='w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors'
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price Range Dropdown */}
                {activeField === 'price' && (
                  <div>
                    <h3 className='font-semibold text-sm mb-3'>Khoảng giá</h3>
                    <div className='space-y-2'>
                      {priceRanges.map((range) => (
                        <button
                          key={range.value}
                          onClick={() => {
                            setPriceRange(range.label);
                            handleClose();
                          }}
                          className='w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors'
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Guest Count Dropdown */}
                {activeField === 'guests' && (
                  <div>
                    <h3 className='font-semibold text-sm mb-3'>Số người</h3>
                    <div className='space-y-2'>
                      {guestOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setGuestCount(option.label);
                            handleClose();
                          }}
                          className='w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors'
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Location Search */}
                {activeField === 'location' && (
                  <>
                    {/* Location Section */}
                    <div>
                      <h3 className='font-semibold text-sm mb-3'>ĐỊA ĐIỂM</h3>
                      <div className='flex flex-wrap gap-2'>
                        <Button
                          variant={
                            selectedCity === 'Hồ Chí Minh'
                              ? 'default'
                              : 'outline'
                          }
                          size='sm'
                          className='rounded-full'
                          onClick={() => setSelectedCity('Hồ Chí Minh')}
                        >
                          Hồ Chí Minh
                        </Button>
                        <Button
                          variant={
                            selectedCity === 'Hà Nội' ? 'default' : 'outline'
                          }
                          size='sm'
                          className='rounded-full'
                          onClick={() => setSelectedCity('Hà Nội')}
                        >
                          Hà Nội
                        </Button>
                        <Button
                          variant={
                            selectedCity === 'Đà Nẵng' ? 'default' : 'outline'
                          }
                          size='sm'
                          className='rounded-full'
                          onClick={() => setSelectedCity('Đà Nẵng')}
                        >
                          Đà Nẵng
                        </Button>
                      </div>
                    </div>

                    {/* Travel Plans */}
                    <div>
                      <h3 className='font-semibold text-sm mb-3'>
                        KẾ HOẠCH CHUYẾN ĐI
                      </h3>
                      <div className='grid grid-cols-2 gap-2'>
                        <Button
                          variant='outline'
                          size='sm'
                          className='justify-start rounded-lg h-auto py-2'
                        >
                          <Calendar className='w-4 h-4 mr-2 text-green-400' />
                          <span className='text-xs'>Công tác dài ngày</span>
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='justify-start rounded-lg h-auto py-2'
                        >
                          <Calendar className='w-4 h-4 mr-2 text-green-400' />
                          <span className='text-xs'>Công tác ngắn ngày</span>
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='justify-start rounded-lg h-auto py-2'
                        >
                          <MapPin className='w-4 h-4 mr-2 text-green-400' />
                          <span className='text-xs'>Du lịch nghỉ dưỡng</span>
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='justify-start rounded-lg h-auto py-2'
                        >
                          <MapPin className='w-4 h-4 mr-2 text-green-400' />
                          <span className='text-xs'>Khám phá thành phố</span>
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='justify-start rounded-lg h-auto py-2'
                        >
                          <MapPin className='w-4 h-4 mr-2 text-green-400' />
                          <span className='text-xs'>Lưu trú dài hạn</span>
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='justify-start rounded-lg h-auto py-2'
                        >
                          <MapPin className='w-4 h-4 mr-2 text-green-400' />
                          <span className='text-xs'>Staycation</span>
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='justify-start rounded-lg h-auto py-2'
                        >
                          <MapPin className='w-4 h-4 mr-2 text-green-400' />
                          <span className='text-xs'>Workcation</span>
                        </Button>
                      </div>
                    </div>

                    {/* Priority Areas */}
                    <div>
                      <h3 className='font-semibold text-sm mb-3'>
                        ƯU TIÊN KHU VỰC
                      </h3>
                      <div className='flex flex-wrap gap-2'>
                        <Button
                          variant='outline'
                          size='sm'
                          className='rounded-full text-xs'
                        >
                          Gần Cầu Rồng
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='rounded-full text-xs'
                        >
                          Gần Sân Bay
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='rounded-full text-xs'
                        >
                          Phố Cổ
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='rounded-full text-xs'
                        >
                          Quận 1
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='rounded-full text-xs'
                        >
                          Quận 2
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='rounded-full text-xs'
                        >
                          Quận 3
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='rounded-full text-xs'
                        >
                          Quận Trung Tâm
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='rounded-full text-xs'
                        >
                          Khu bãi đá
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Right Column - Search Results (only show for location search) */}
              {activeField === 'location' && (
                <div className='lg:col-span-2'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center gap-2'>
                      <h3 className='font-semibold text-sm'>
                        TÌM KIẾM GẦN ĐÂY
                      </h3>
                    </div>
                  </div>

                  <div className='mb-4 flex items-center gap-2 text-sm'>
                    <MapPin className='w-4 h-4' />
                    <span>Hồ Chí Minh</span>
                    <Button
                      variant='link'
                      size='sm'
                      className='text-green-400 text-xs ml-auto'
                    >
                      Tỉnh/Thành phố
                    </Button>
                  </div>

                  <h3 className='font-semibold mb-4 text-sm'>
                    KHÁCH SẠN PHỔ BIẾN
                  </h3>

                  {/* Property Cards */}
                  <div className='space-y-3 max-h-96 overflow-y-auto'>
                    {[
                      {
                        name: 'RoomZ Living Võ Thị Sáu',
                        location: 'Khu bãi đá, Quận 3',
                        tags: [
                          'Du lịch nghỉ dưỡng',
                          'Staycation',
                          'Workcation',
                        ],
                        image: 'bg-gradient-to-br from-green-400 to-green-400',
                      },
                      {
                        name: 'Express By RoomZ Hoàng Sa',
                        location: 'Quận 1',
                        tags: [
                          'Staycation',
                          'Khám phá thành phố',
                          'Công tác ngắn ngày',
                        ],
                        image: 'bg-gradient-to-br from-blue-200 to-blue-300',
                      },
                      {
                        name: 'Signature By RoomZ Lê Thánh Tôn',
                        location: 'Quận Trung Tâm, Quận 1',
                        tags: [
                          'Du lịch nghỉ dưỡng',
                          'Công tác ngắn ngày',
                          'Khám phá thành phố',
                        ],
                        image:
                          'bg-gradient-to-br from-purple-200 to-purple-300',
                      },
                      {
                        name: 'Signature By RoomZ Thạ Nhuộm',
                        location: 'Quận Trung Tâm, Phố Cổ',
                        tags: [
                          'Du lịch nghỉ dưỡng',
                          'Công tác ngắn ngày',
                          'Khám phá thành phố',
                        ],
                        image: 'bg-gradient-to-br from-green-200 to-green-300',
                      },
                    ].map((property, idx) => (
                      <div
                        key={idx}
                        className='flex gap-3 p-3 border rounded-xl hover:shadow-md transition-shadow cursor-pointer'
                      >
                        <div
                          className={`w-20 h-20 ${property.image} rounded-lg flex-shrink-0`}
                        />
                        <div className='flex-1 min-w-0'>
                          <div className='flex flex-wrap gap-1 mb-2'>
                            {property.tags.map((tag, i) => (
                              <span
                                key={i}
                                className='text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full whitespace-nowrap'
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h4 className='font-semibold text-sm mb-1 truncate'>
                            {property.name}
                          </h4>
                          <p className='text-xs text-green-600 flex items-center gap-1'>
                            <span className='text-green-600'>✓</span>
                            {property.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
