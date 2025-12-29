export interface NavItem {
  label: string;
  labelKey: string;
  key: string;
  path: string;
  children?: NavItem[];
  isPublished?: boolean;
}

export const navigation: NavItem[] = [
  {
    key: 'home',
    label: 'Trang chủ',
    labelKey: 'label.home',
    path: '/',
    isPublished: true,
  },
  {
    key: 'about',
    label: 'Về chúng tôi',
    labelKey: 'label.about',
    path: '/about-us',
    isPublished: true,
  },
  {
    key: 'find-room',
    label: 'Đặt phòng',
    labelKey: 'label.find-room',
    path: '/find-room',
    isPublished: true,
  },
  {
    key: 'branches',
    label: 'Các chi nhánh',
    labelKey: 'label.branches',
    path: '/branches',
    isPublished: true,
  },
  {
    key: 'news',
    label: 'Tin tức',
    labelKey: 'label.news',
    path: '/news',
    isPublished: true,
  },
  {
    key: 'contact',
    label: 'Liên hệ',
    labelKey: 'label.contact',
    path: '/contact',
    isPublished: true,
  },
];
