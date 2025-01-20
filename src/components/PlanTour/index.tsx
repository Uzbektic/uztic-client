import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Tooltip, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { CalculatorFormData } from '../../types/calculator';
import Step0 from './Steps/Step0';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import { Container, Step, StepLabel, Stepper } from '@mui/material';
import {
  BUKHARA_HOTEL_RATES,
  CAR_RATES,
  GUIDE_RATE,
  HOTEL_CITIES,
  INCREASE_RATES_FOR_AGENCY,
  INCREASE_RATES_FOR_TOURISTS,
  KHIVA_HOTEL_RATES,
  MINI_BUS_RATES,
  OPTIONS,
  REGULAR_TRAIN_RATES,
  SAMARKAND_HOTEL_RATES,
  SPEED_TRAIN_RATES,
  steps,
  TASHKENT_HOTEL_RATES,
  TOURIST_TYPES,
  VISA_FEE_GROUP,
  VISA_FEE_INDIVIDUAL,
  VISA_TYPES,
} from './constants';
import { StepIconProps } from '@mui/material/StepIcon';
import { CustomColors } from '../../theme';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CalculateIcon from '@mui/icons-material/Calculate';
import Step4 from './Steps/Step4';
import { HotelRates, RoomType, SelectedHotel } from '../../types/hotels';
import { TrainClass, TrainRoute, TrainService } from '../../types/trains';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Step5 from './Steps/Step5';
import { sendDataToBackend } from '../../mutations';
import backgroundImage from '../../assets/images/tour-planner/step1.jpeg';

const stepIcons: { [key: number]: JSX.Element } = {
  1: <PersonAddIcon />,
  2: <ContentPasteIcon />,
  3: <HotelIcon />,
  4: <DirectionsCarIcon />,
  5: <CalculateIcon />,
  6: <CameraAltIcon />,
};

const CustomStepIcon: React.FC<StepIconProps> = (props) => {
  const { active, completed, icon } = props;

  return (
    <div
      style={{
        color: completed
          ? CustomColors.success
          : active
          ? CustomColors.primary
          : CustomColors.fog,
      }}
    >
      {completed ? <CheckCircleIcon /> : stepIcons[Number(icon)]}
    </div>
  );
};

const PlanTour = () => {
  const [priceIncrease, setPriceIncrease] = useState(
    INCREASE_RATES_FOR_TOURISTS
  );
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm<CalculatorFormData>({
    defaultValues: {
      grandTotal: 0,
      hotelTotal: 0,
      additionalTrainsTotal: 0,
      additionalRegularTrainsTotal: 0,
      additionalSpeedTrainsTotal: 0,
      additionalServicesTotal: 0,
      hotelTotalTashkent: 0,
      hotelTotalSamarkand: 0,
      hotelTotalBukhara: 0,
      hotelTotalKhiva: 0,
    },
  });

  const {
    handleSubmit,
    trigger,
    formState: { isSubmitting },
    watch,
    reset,
    setValue,
    setError,
  } = methods;

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const formData = watch();

  const handleNext = async () => {
    const isValid = await trigger();

    if (isValid) {
      if (currentStep === 0) {
        if (!formData.touristType) {
          setError('touristType', {
            type: 'required',
            message: 'Tourist type is required',
          });
          return;
        }

        if (formData.touristType === TOURIST_TYPES.AGENCY) {
          if (formData.password !== 'Uztic123.') {
            setError('password', {
              type: 'required',
              message: 'Password is incorrect',
            });
            return;
          }
        }
      }

      if (currentStep === 4) {
        handleSubmit(onSubmit)();
        return;
      }

      if (currentStep === steps.length - 1) {
        setOpen(false);
        setCurrentStep(0);
        reset();
        return;
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const onSubmit: SubmitHandler<CalculatorFormData> = async (data) => {
    try {
      setLoading(true);
      const response = await sendDataToBackend(
        data,
        selectedHotels,
        selectedTrains,
        priceIncrease
      );
      console.log(response);
      setLoading(false);
      setCurrentStep(currentStep + 1);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    const currentValues = watch();

    reset({
      touristType: currentValues.touristType,
      grandTotal: 0,
      hotelTotal: 0,
      additionalRegularTrainsTotal: 0,
      additionalSpeedTrainsTotal: 0,
      additionalTrainsTotal: 0,
      additionalServicesTotal: 0,
      hotelTotalTashkent: 0,
      hotelTotalSamarkand: 0,
      hotelTotalBukhara: 0,
      hotelTotalKhiva: 0,
    });
  };

  useEffect(() => {
    if (formData.touristType) {
      handleReset();
    }
  }, [formData.touristType]);

  useEffect(() => {
    if (formData.touristType === TOURIST_TYPES.AGENCY) {
      setPriceIncrease(INCREASE_RATES_FOR_AGENCY);
    } else {
      setPriceIncrease(INCREASE_RATES_FOR_TOURISTS);
    }
  }, [formData.touristType]);

  const getSelectedHotelsAndRooms = (): SelectedHotel[] => {
    const selectedHotels: SelectedHotel[] = [];

    for (const key in formData) {
      if (key.endsWith('__room')) {
        const [city, hotel, roomType] = key.split('__');
        const hotelKey = `${city}__${hotel}__${roomType}`;
        // @ts-ignore
        const hotelSelected = formData[hotelKey];
        // @ts-ignore
        const roomValue = formData[key];

        if (hotelSelected) {
          const price = getRoomPrice(city, hotel, roomType, roomValue);

          selectedHotels.push({
            city,
            hotel,
            roomType: roomType.replace('_', ' '),
            roomValue,
            price,
          });
        }
      }
    }

    return selectedHotels;
  };

  const getSelectedTrains = (): TrainService[] => {
    const selectedTrains: TrainService[] = [];

    for (const key in formData) {
      if (key.endsWith('__class')) {
        const routeKey = key.split('__class')[0];
        // @ts-ignore
        const classType = formData[key] as TrainClass;
        const isSpeedTrain = routeKey.endsWith('SpeedTrain');
        const route = routeKey
          .replace('SpeedTrain', '')
          .replace('RegularTrain', '') as TrainRoute;

        // @ts-ignore
        const isRouteSelected = formData[routeKey.replace('__class', '')];
        if (isRouteSelected && classType) {
          let lowerClassType = classType?.toLowerCase();
          const price = isSpeedTrain
            ? SPEED_TRAIN_RATES[route]
            : REGULAR_TRAIN_RATES[route];
          // @ts-ignore
          let priceCalculates = price[lowerClassType] + priceIncrease;
          if (price) {
            selectedTrains.push({
              route,
              classType,
              type: isSpeedTrain ? 'speedTrain' : 'regularTrain',
              price: priceCalculates,
            });
          }
        }
      }
    }

    return selectedTrains;
  };

  const getRoomPrice = (
    city: string,
    hotel: string,
    roomType: string,
    roomValue: RoomType
  ): number => {
    let rates: HotelRates;
    city = city.replace('Hotel', '');

    switch (city) {
      case HOTEL_CITIES.TASHKENT:
        rates = TASHKENT_HOTEL_RATES;
        break;
      case HOTEL_CITIES.SAMARKAND:
        rates = SAMARKAND_HOTEL_RATES;
        break;
      case HOTEL_CITIES.BUKHARA:
        rates = BUKHARA_HOTEL_RATES;
        break;
      case HOTEL_CITIES.KHIVA:
        rates = KHIVA_HOTEL_RATES;
        break;
      default:
        return 0;
    }

    const hotelRates = rates[hotel];

    if (hotelRates) {
      const roomRates = hotelRates[roomType];
      if (roomRates && roomValue) {
        let lowerCaseValue = roomValue?.toLowerCase();
        //@ts-ignore
        return roomRates[lowerCaseValue] + priceIncrease || 0;
      }
    }
    return 0;
  };

  const selectedHotels = getSelectedHotelsAndRooms();
  let selectedTrains = getSelectedTrains();

  useEffect(() => {
    let total = 0;
    let additionalTotal = 0;

    if (
      formData.hotelTotalTashkent &&
      formData.numberOfNightsInTashkent &&
      formData.numberOfRoomsInTashkent
    ) {
      let value =
        formData.hotelTotalTashkent *
        formData.numberOfNightsInTashkent *
        formData.numberOfRoomsInTashkent;
      total += value;
    }

    if (
      formData.hotelTotalSamarkand &&
      formData.numberOfNightsInSamarkand &&
      formData.numberOfRoomsInSamarkand
    ) {
      let value =
        formData.hotelTotalSamarkand *
        formData.numberOfNightsInSamarkand *
        formData.numberOfRoomsInSamarkand;
      total += value;
    }

    if (
      formData.hotelTotalBukhara &&
      formData.numberOfNightsInBukhara &&
      formData.numberOfRoomsInBukhara
    ) {
      let value =
        formData.hotelTotalBukhara *
        formData.numberOfNightsInBukhara *
        formData.numberOfRoomsInBukhara;
      total += value;
    }

    if (
      formData.hotelTotalKhiva &&
      formData.numberOfNightsInKhiva &&
      formData.numberOfRoomsInKhiva
    ) {
      let value =
        formData.hotelTotalKhiva *
        formData.numberOfNightsInKhiva *
        formData.numberOfRoomsInKhiva;
      total += value;
    }

    if (formData.additionalSpeedTrainsTotal) {
      additionalTotal += formData.additionalSpeedTrainsTotal;
    }

    if (formData.additionalRegularTrainsTotal) {
      additionalTotal += formData.additionalRegularTrainsTotal;
    }

    if (formData.englishSpeakingGuide && formData.numberOfDaysForGuide) {
      let guidePrice = GUIDE_RATE + priceIncrease;
      let value = guidePrice * formData.numberOfDaysForGuide;
      additionalTotal += value;
    }

    if (formData.visa) {
      if (formData.visa === OPTIONS.YES) {
        if (
          formData.visaType &&
          formData.visaType === VISA_TYPES.INDIVIDUAL &&
          formData.numberOfVisas
        ) {
          let value = VISA_FEE_INDIVIDUAL * formData.numberOfVisas;
          additionalTotal += value;
        } else if (
          formData.visaType &&
          formData.visaType === VISA_TYPES.GROUP &&
          formData.numberOfVisas
        ) {
          let value = VISA_FEE_GROUP * formData.numberOfVisas;
          additionalTotal += value;
        }
      }
    }
    if (formData.carOneDay && formData.numberOfDaysForCarOneDay) {
      let price = CAR_RATES.oneDay + priceIncrease;
      let value = price * formData.numberOfDaysForCarOneDay;
      additionalTotal += value;
    }

    if (formData.carMountain) {
      let price = CAR_RATES.mountain + priceIncrease;
      additionalTotal += price;
    }

    if (formData.carAirport && formData.numberOfDaysForCarAirport) {
      let price = CAR_RATES.airport + priceIncrease;
      let value = price * formData.numberOfDaysForCarAirport;
      additionalTotal += value;
    }

    if (formData.miniBusOneDay && formData.numberOfDaysForMiniBusOneDay) {
      let price = MINI_BUS_RATES.oneDay + priceIncrease;
      let value = price * formData.numberOfDaysForMiniBusOneDay;
      additionalTotal += value;
    }

    if (formData.miniBusMountain) {
      let price = MINI_BUS_RATES.mountain + priceIncrease;
      additionalTotal += price;
    }

    if (formData.miniBusAirport && formData.numberOfDaysForMiniBusAirport) {
      let price = MINI_BUS_RATES.airport + priceIncrease;
      let value = price * formData.numberOfDaysForMiniBusAirport;
      additionalTotal += value;
    }

    setValue('hotelTotal', total);
    setValue('additionalServicesTotal', additionalTotal);
  }, [
    formData.hotelTotalTashkent,
    formData.numberOfNightsInTashkent,
    formData.numberOfRoomsInTashkent,
    formData.hotelTotalSamarkand,
    formData.numberOfNightsInSamarkand,
    formData.numberOfRoomsInSamarkand,
    formData.hotelTotalKhiva,
    formData.numberOfNightsInKhiva,
    formData.numberOfRoomsInKhiva,
    formData.hotelTotalBukhara,
    formData.numberOfNightsInBukhara,
    formData.numberOfRoomsInBukhara,
    formData.englishSpeakingGuide,
    formData.numberOfDaysForGuide,
    formData.carOneDay,
    formData.numberOfDaysForCarOneDay,
    formData.carMountain,
    formData.carAirport,
    formData.numberOfDaysForCarAirport,
    formData.miniBusOneDay,
    formData.numberOfDaysForMiniBusOneDay,
    formData.miniBusMountain,
    formData.miniBusAirport,
    formData.numberOfDaysForMiniBusAirport,
    formData.visa,
    formData.visaType,
    formData.numberOfVisas,
    formData.additionalRegularTrainsTotal,
    formData.additionalSpeedTrainsTotal,
    currentStep,
    setValue,
  ]);

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Step0 />;
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return (
          <Step4
            selectedHotels={selectedHotels}
            selectedTrains={selectedTrains}
          />
        );
      case 5:
        return <Step5 />;
      default:
        return null;
    }
  };

  const showButtonLabel = (currentStep: number) => {
    if (currentStep === steps.length - 1) {
      return 'Done';
    }

    if (currentStep === steps.length - 2) {
      return 'Confirm your reservation';
    }

    return 'Next';
  };

  return (
    <>
      <Tooltip title="Plan your tour" placement="top">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: 2 }}
          onClick={handleClickOpen}
        >
          Plan Tour
        </Button>
      </Tooltip>

      <Dialog fullWidth={true} maxWidth={'lg'} open={open}>
        <FormProvider {...methods}>
          <div
            style={
              currentStep === 0
                ? {
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                  }
                : {}
            }
          >
            <DialogTitle
              variant="h3"
              style={{
                color:
                  currentStep === 0 ? CustomColors.white : CustomColors.black,
              }}
            >
              Plan your tour
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Container maxWidth="lg">
                  <>
                    <Typography
                      variant="h4"
                      textAlign={'center'}
                      style={{
                        marginBottom: 20,
                        color:
                          currentStep === 0
                            ? CustomColors.white
                            : CustomColors.black,
                      }}
                    >
                      Grand Total
                    </Typography>
                    <Typography
                      variant="h2"
                      textAlign={'center'}
                      style={{
                        marginBottom: 50,
                        color:
                          currentStep === 0
                            ? CustomColors.white
                            : CustomColors.black,
                      }}
                    >
                      $ {formData.hotelTotal + formData.additionalServicesTotal}
                    </Typography>
                  </>

                  <Stepper activeStep={currentStep} alternativeLabel>
                    {steps.map((label, index) => (
                      <Step key={index}>
                        <StepLabel StepIconComponent={CustomStepIcon}>
                          <p
                            style={{
                              fontWeight: 'bold',
                              color:
                                currentStep === 0
                                  ? CustomColors.white
                                  : CustomColors.black,
                            }}
                          >
                            {label}
                          </p>
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>

                  <div>{renderStepContent(currentStep)}</div>
                </Container>
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="primary"
                disabled={loading || currentStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                type="button"
                variant="contained"
                color="primary"
                disabled={isSubmitting || loading}
                onClick={handleNext}
              >
                {showButtonLabel(currentStep)}
              </Button>
            </DialogActions>
          </div>
        </FormProvider>
      </Dialog>
    </>
  );
};

export default PlanTour;
