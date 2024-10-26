export interface CalculatorFormData {
  grandTotal: number;
  hotelTotal: number;
  hotelTotalTashkent: number;
  hotelTotalSamarkand: number;
  hotelTotalBukhara: number;
  hotelTotalKhiva: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  numberOfTourists: string;
  nights: string;
  tashkent: boolean;
  samarkand: boolean;
  bukhara: boolean;
  khiva: boolean;

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
}
