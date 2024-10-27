export type TrainRoute =
  | 'tashkentToSamarkand'
  | 'tashkentToBukhara'
  | 'samarkandToBukhara';

export type TrainClass = 'economy' | 'business';

export interface TrainService {
  route: string;
  classType: string;
  type: 'speedTrain' | 'regularTrain';
  price: number;
}
