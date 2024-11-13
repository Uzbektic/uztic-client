export interface CalculatorFormData {
  grandTotal: number;
  hotelTotal: number;
  hotelTotalTashkent: number;
  hotelTotalSamarkand: number;
  hotelTotalBukhara: number;
  hotelTotalKhiva: number;
  additionalTrainsTotal: number;
  additionalServicesTotal: number;

  priceIncrease: number;

  touristType: string;
  password: string;

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;

  numberOfNightsInTashkent: number;
  numberOfNightsInSamarkand: number;
  numberOfNightsInBukhara: number;
  numberOfNightsInKhiva: number;

  numberOfRoomsInTashkent: number;
  numberOfRoomsInSamarkand: number;
  numberOfRoomsInBukhara: number;
  numberOfRoomsInKhiva: number;

  tashkent: boolean;
  samarkand: boolean;
  bukhara: boolean;
  khiva: boolean;

  // HOTELS
  tashkentHotel__hyattRegency__standardKing: boolean;
  tashkentHotel__hyattRegency__standardKing__room: boolean | undefined | string;
  tashkentHotel__hyattRegency__deluxeKing: boolean;
  tashkentHotel__hyattRegency__deluxeKing__room: boolean | undefined | string;
  tashkentHotel__hyattRegency__clubKing: boolean;
  tashkentHotel__hyattRegency__clubKing__room: boolean | undefined | string;

  tashkentHotel__hilton__guestRoom: boolean;
  tashkentHotel__hilton__guestRoom__room: boolean | undefined | string;
  tashkentHotel__hilton__executiveRoom: boolean;
  tashkentHotel__hilton__executiveRoom__room: boolean | undefined | string;
  tashkentHotel__hilton__cornerSuite: boolean;
  tashkentHotel__hilton__cornerSuite__room: boolean | undefined | string;

  tashkentHotel__wyndham__standard: boolean;
  tashkentHotel__wyndham__standard__room: boolean | undefined | string;
  tashkentHotel__wyndham__deluxe: boolean;
  tashkentHotel__wyndham__deluxe__room: boolean | undefined | string;

  tashkentHotel__hampton__superFlex: boolean;
  tashkentHotel__hampton__superFlex__room: boolean | undefined | string;
  tashkentHotel__hampton__queenKing: boolean;
  tashkentHotel__hampton__queenKing__room: boolean | undefined | string;
  tashkentHotel__hampton__deluxe: boolean;
  tashkentHotel__hampton__deluxe__room: boolean | undefined | string;

  tashkentHotel__ramada__standard: boolean;
  tashkentHotel__ramada__standard__room: boolean | undefined | string;
  tashkentHotel__ramada__premium: boolean;
  tashkentHotel__ramada__premium__room: boolean | undefined | string;

  tashkentHotel__gabrielle__standard: boolean;
  tashkentHotel__gabrielle__standard__room: boolean | undefined | string;
  tashkentHotel__gabrielle__panoramic: boolean;
  tashkentHotel__gabrielle__panoramic__room: boolean | undefined | string;
  tashkentHotel__gabrielle__royal: boolean;
  tashkentHotel__gabrielle__royal__room: boolean | undefined | string;
  tashkentHotel__gabrielle__apartment: boolean;
  tashkentHotel__gabrielle__apartment__room: boolean | undefined | string;

  tashkentHotel__novza__standard: boolean;
  tashkentHotel__novza__standard__room: boolean | undefined | string;
  tashkentHotel__novza__deluxe: boolean;
  tashkentHotel__novza__deluxe__room: boolean | undefined | string;
  tashkentHotel__novza__superior: boolean;
  tashkentHotel__novza__superior__room: boolean | undefined | string;

  tashkentHotel__mercure__superiorKing: boolean;
  tashkentHotel__mercure__superiorKing__room: boolean | undefined | string;
  tashkentHotel__mercure__superior: boolean;
  tashkentHotel__mercure__superior__room: boolean | undefined | string;
  tashkentHotel__mercure__prestige: boolean;
  tashkentHotel__mercure__prestige__room: boolean | undefined | string;

  tashkentHotel__garnet__standard: boolean;
  tashkentHotel__garnet__standard__room: boolean | undefined | string;
  tashkentHotel__garnet__deluxe: boolean;
  tashkentHotel__garnet__deluxe__room: boolean | undefined | string;
  tashkentHotel__garnet__triple: boolean;
  tashkentHotel__garnet__triple__room: boolean | undefined | string;
  tashkentHotel__garnet__suite: boolean;
  tashkentHotel__garnet__suite__room: boolean | undefined | string;

  tashkentHotel__greenPark__standard: boolean;
  tashkentHotel__greenPark__standard__room: boolean | undefined | string;
  tashkentHotel__greenPark__junior: boolean;
  tashkentHotel__greenPark__junior__room: boolean | undefined | string;
  tashkentHotel__greenPark__executive: boolean;
  tashkentHotel__greenPark__executive__room: boolean | undefined | string;

  tashkentHotel__stayInn__standard: boolean;
  tashkentHotel__stayInn__standard__room: boolean | undefined | string;
  tashkentHotel__stayInn__superior: boolean;
  tashkentHotel__stayInn__superior__room: boolean | undefined | string;

  tashkentHotel__krokus__standard: boolean;
  tashkentHotel__krokus__standard__room: boolean | undefined | string;
  tashkentHotel__krokus__deluxe: boolean;
  tashkentHotel__krokus__deluxe__room: boolean | undefined | string;
  tashkentHotel__krokus__studio: boolean;
  tashkentHotel__krokus__studio__room: boolean | undefined | string;

  tashkentHotel__dsfGarden__standard: boolean;
  tashkentHotel__dsfGarden__standard__room: boolean | undefined | string;
  tashkentHotel__dsfGarden__triple: boolean;
  tashkentHotel__dsfGarden__triple__room: boolean | undefined | string;

  samarkandHotel__movenPick__standard: boolean;
  samarkandHotel__movenPick__standard__room: boolean | undefined | string;
  samarkandHotel__movenPick__executive: boolean;
  samarkandHotel__movenPick__executive__room: boolean | undefined | string;

  samarkandHotel__alexander__standardSingle: boolean;
  samarkandHotel__alexander__standardSingle__room: boolean | undefined | string;
  samarkandHotel__alexander__standardDouble: boolean;
  samarkandHotel__alexander__standardDouble__room: boolean | undefined | string;
  samarkandHotel__alexander__standardTwin: boolean;
  samarkandHotel__alexander__standardTwin__room: boolean | undefined | string;
  samarkandHotel__alexander__standardTriple: boolean;
  samarkandHotel__alexander__standardTriple__room: boolean | undefined | string;
  samarkandHotel__alexander__luxTwin: boolean;
  samarkandHotel__alexander__luxTwin__room: boolean | undefined | string;

  samarkandHotel__dilimah__standard: boolean;
  samarkandHotel__dilimah__standard__room: boolean | undefined | string;
  samarkandHotel__dilimah__superior: boolean;
  samarkandHotel__dilimah__superior__room: boolean | undefined | string;

  samarkandHotel__diyora__standard: boolean;
  samarkandHotel__diyora__standard__room: boolean | undefined | string;
  samarkandHotel__diyora__triple: boolean;
  samarkandHotel__diyora__triple__room: boolean | undefined | string;

  samarkandHotel__malikaPrime__standard: boolean;
  samarkandHotel__malikaPrime__standard__room: boolean | undefined | string;
  samarkandHotel__malikaPrime__triple: boolean;
  samarkandHotel__malikaPrime__triple__room: boolean | undefined | string;

  samarkandHotel__malikaClassic__standard: boolean;
  samarkandHotel__malikaClassic__standard__room: boolean | undefined | string;
  samarkandHotel__malikaClassic__triple: boolean;
  samarkandHotel__malikaClassic__triple__room: boolean | undefined | string;

  samarkandHotel__orientStar__standard: boolean;
  samarkandHotel__orientStar__standard__room: boolean | undefined | string;
  samarkandHotel__orientStar__lux: boolean;
  samarkandHotel__orientStar__lux__room: boolean | undefined | string;
  samarkandHotel__orientStar__family: boolean;
  samarkandHotel__orientStar__family__room: boolean | undefined | string;

  samarkandHotel__qosh__standard: boolean;
  samarkandHotel__qosh__standard__room: boolean | undefined | string;
  samarkandHotel__qosh__triple: boolean;
  samarkandHotel__qosh__triple__room: boolean | undefined | string;

  samarkandHotel__dilshoda__standard: boolean;
  samarkandHotel__dilshoda__standard__room: boolean | undefined | string;
  samarkandHotel__dilshoda__triple: boolean;
  samarkandHotel__dilshoda__triple__room: boolean | undefined | string;

  samarkandHotel__wellfort__standard: boolean;
  samarkandHotel__wellfort__standard__room: boolean | undefined | string;
  samarkandHotel__wellfort__triple: boolean;
  samarkandHotel__wellfort__triple__room: boolean | undefined | string;

  samarkandHotel__bravo__standard: boolean;
  samarkandHotel__bravo__standard__room: boolean | undefined | string;

  samarkandHotel__eastStar__standard: boolean;
  samarkandHotel__eastStar__standard__room: boolean | undefined | string;
  samarkandHotel__eastStar__deluxe: boolean;
  samarkandHotel__eastStar__deluxe__room: boolean | undefined | string;

  bukharaHotel__malikaBukhara__standard: boolean;
  bukharaHotel__malikaBukhara__standard__room: boolean | undefined | string;
  bukharaHotel__malikaBukhara__triple: boolean;
  bukharaHotel__malikaBukhara__triple__room: boolean | undefined | string;

  bukharaHotel__gardenPlaza__standard: boolean;
  bukharaHotel__gardenPlaza__standard__room: boolean | undefined | string;
  bukharaHotel__gardenPlaza__triple: boolean;
  bukharaHotel__gardenPlaza__triple__room: boolean | undefined | string;
  bukharaHotel__gardenPlaza__deluxe: boolean;
  bukharaHotel__gardenPlaza__deluxe__room: boolean | undefined | string;

  bukharaHotel__mercure__classic: boolean;
  bukharaHotel__mercure__classic__room: boolean | undefined | string;
  bukharaHotel__mercure__superior: boolean;
  bukharaHotel__mercure__superior__room: boolean | undefined | string;
  bukharaHotel__mercure__privilege: boolean;
  bukharaHotel__mercure__privilege__room: boolean | undefined | string;

  bukharaHotel__omarKhayam__standard: boolean;
  bukharaHotel__omarKhayam__standard__room: boolean | undefined | string;
  bukharaHotel__omarKhayam__triple: boolean;
  bukharaHotel__omarKhayam__triple__room: boolean | undefined | string;

  bukharaHotel__paradise__standard: boolean;
  bukharaHotel__paradise__standard__room: boolean | undefined | string;
  bukharaHotel__paradise__triple: boolean;
  bukharaHotel__paradise__triple__room: boolean | undefined | string;
  bukharaHotel__paradise__deluxe: boolean;
  bukharaHotel__paradise__deluxe__room: boolean | undefined | string;

  bukharaHotel__royal__standard: boolean;
  bukharaHotel__royal__standard__room: boolean | undefined | string;
  bukharaHotel__royal__triple: boolean;
  bukharaHotel__royal__triple__room: boolean | undefined | string;

  bukharaHotel__shahidZarafshan__standard: boolean;
  bukharaHotel__shahidZarafshan__standard__room: boolean | undefined | string;
  bukharaHotel__shahidZarafshan__deluxe: boolean;
  bukharaHotel__shahidZarafshan__deluxe__room: boolean | undefined | string;

  bukharaHotel__turonCity__standard: boolean;
  bukharaHotel__turonCity__standard__room: boolean | undefined | string;
  bukharaHotel__turonCity__deluxe: boolean;
  bukharaHotel__turonCity__deluxe__room: boolean | undefined | string;

  bukharaHotel__wyndham__standard: boolean;
  bukharaHotel__wyndham__standard__room: boolean | undefined | string;
  bukharaHotel__wyndham__deluxe: boolean;
  bukharaHotel__wyndham__deluxe__room: boolean | undefined | string;

  bukharaHotel__dunyo__standard: boolean;
  bukharaHotel__dunyo__standard__room: boolean | undefined | string;
  bukharaHotel__dunyo__triple: boolean;
  bukharaHotel__dunyo__triple__room: boolean | undefined | string;

  bukharaHotel__gumbaz__standard: boolean;
  bukharaHotel__gumbaz__standard__room: boolean | undefined | string;
  bukharaHotel__gumbaz__triple: boolean;
  bukharaHotel__gumbaz__triple__room: boolean | undefined | string;

  bukharaHotel__lyabi__standard: boolean;
  bukharaHotel__lyabi__standard__room: boolean | undefined | string;

  khivaHotel__asia__standard: boolean;
  khivaHotel__asia__standard__room: boolean | undefined | string;
  khivaHotel__asia__triple: boolean;
  khivaHotel__asia__triple__room: boolean | undefined | string;

  khivaHotel__bankir__standard: boolean;
  khivaHotel__bankir__standard__room: boolean | undefined | string;
  khivaHotel__bankir__triple: boolean;
  khivaHotel__bankir__triple__room: boolean | undefined | string;

  khivaHotel__orientStar__standard: boolean;
  khivaHotel__orientStar__standard__room: boolean | undefined | string;
  khivaHotel__orientStar__triple: boolean;
  khivaHotel__orientStar__triple__room: boolean | undefined | string;

  // ADDITIONAL SERVICES
  // Speed Trains
  tashkentToSamarkandSpeedTrain: boolean;
  tashkentToSamarkandSpeedTrain__class: boolean | undefined | string;
  tashkentToBukharaSpeedTrain: boolean;
  tashkentToBukharaSpeedTrain__class: boolean | undefined | string;
  samarkandToBukharaSpeedTrain: boolean;
  samarkandToBukharaSpeedTrain__class: boolean | undefined | string;
  samarkandToTashkentSpeedTrain: boolean;
  samarkandToTashkentSpeedTrain__class: boolean | undefined | string;
  bukharaToTashkentSpeedTrain: boolean;
  bukharaToTashkentSpeedTrain__class: boolean | undefined | string;
  bukharaToSamarkandSpeedTrain: boolean;
  bukharaToSamarkandSpeedTrain__class: boolean | undefined | string;

  // Regular Trains
  tashkentToSamarkandRegularTrain: boolean;
  tashkentToSamarkandRegularTrain__class: boolean | undefined | string;
  tashkentToBukharaRegularTrain: boolean;
  tashkentToBukharaRegularTrain__class: boolean | undefined | string;
  samarkandToBukharaRegularTrain: boolean;
  samarkandToBukharaRegularTrain__class: boolean | undefined | string;
  samarkandToTashkentRegularTrain: boolean;
  samarkandToTashkentRegularTrain__class: boolean | undefined | string;
  bukharaToTashkentRegularTrain: boolean;
  bukharaToTashkentRegularTrain__class: boolean | undefined | string;
  bukharaToSamarkandRegularTrain: boolean;
  bukharaToSamarkandRegularTrain__class: boolean | undefined | string;

  // Guide
  englishSpeakingGuide: boolean;
  numberOfDaysForGuide: number;

  // Car
  carOneDay: boolean;
  numberOfDaysForCarOneDay: number;
  carMountain: boolean;
  carAirport: boolean;
  numberOfDaysForCarAirport: number;

  // MiniBus
  miniBusOneDay: boolean;
  numberOfDaysForMiniBusOneDay: number;
  miniBusMountain: boolean;
  miniBusAirport: boolean;
  numberOfDaysForMiniBusAirport: number;

  // Visa
  visa: string;
}
