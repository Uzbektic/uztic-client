export type TrainRoute =
  | 'tashkentToSamarkand'
  | 'tashkentToBukhara'
  | 'samarkandToBukhara'
  | 'samarkandToTashkent'
  | 'bukharaToTashkent'
  | 'bukharaToSamarkand';

export type TrainClass = 'economy' | 'business';

export interface TrainService {
  route: string;
  classType: string;
  type: 'speedTrain' | 'regularTrain';
  price: number;
}
