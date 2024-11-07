import { HotelRates } from '../../types/hotels';

export const applyRateIncreaseForHotel = (
  rates: HotelRates,
  increaseBy: number
): HotelRates => {
  const updatedRates: HotelRates = {};

  for (const hotel in rates) {
    updatedRates[hotel] = {};
    for (const roomType in rates[hotel]) {
      const { single, double } = rates[hotel][roomType];
      updatedRates[hotel][roomType] = {
        single: single + increaseBy,
        double: double + increaseBy,
      };
    }
  }

  return updatedRates;
};
