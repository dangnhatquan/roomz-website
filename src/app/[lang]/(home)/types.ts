export type TripType =
  | 'long-business'
  | 'short-business'
  | 'vacation'
  | 'explore'
  | 'long-stay'
  | 'staycation'
  | 'workcation';

export type SearchFilter = {
  location?: string;
  checkIn?: Date;
  checkOut?: Date;
  guests: number;
  tripTypes: TripType[];
  areas: string[];
};
