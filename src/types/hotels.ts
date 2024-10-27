export type RoomType = 'single' | 'double';

export interface HotelRates {
  [hotel: string]: {
    [roomType: string]: {
      [key in RoomType]: number;
    };
  };
}

export interface SelectedHotel {
  city: string;
  hotel: string;
  roomType: string;
  roomValue: string;
  price: number;
}
