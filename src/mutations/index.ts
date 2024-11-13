import { client } from '../services/api';
import { CalculatorFormData } from '../types/calculator';
import { SelectedHotel } from '../types/hotels';
import { TrainService } from '../types/trains';

export const sendDataToBackend = async (
  data: CalculatorFormData,
  selectedHotels: SelectedHotel[],
  selectedTrains: TrainService[],
  priceIncrease: number
) => {
  const res = await client.post(`/user/`, {
    ...data,
    selectedHotels,
    selectedTrains,
    priceIncrease,
  });
  return res.data;
};
