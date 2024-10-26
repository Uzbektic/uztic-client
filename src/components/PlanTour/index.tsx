import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { CalculatorFormData } from '../../types/calculator';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import { Container, Step, StepLabel, Stepper } from '@mui/material';
import { steps } from './constants';
import { StepIconProps } from '@mui/material/StepIcon';
import { CustomColors } from '../../theme';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const stepIcons: { [key: number]: JSX.Element } = {
  1: <ContentPasteIcon />,
  2: <HotelIcon />,
  3: <DirectionsCarIcon />,
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
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm<CalculatorFormData>({
    defaultValues: {
      grandTotal: 0,
      hotelTotal: 0,
      firstName: 'dsasad',
      lastName: 'dsasad',
      email: 'dsasad@sdsda.sda',
      phone: 'dsasad',
      numberOfTourists: '21',
      nights: '12',
    },
  });

  const {
    handleSubmit,
    trigger,
    formState: { isSubmitting },
    watch,
    reset,
    setValue,
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
        // if (!formData?.company_name?.name) {
        //   setError('company_name.name', {
        //     type: 'manual',
        //     message: 'Company Name is required',
        //   });
        //   return;
        // }
      }

      if (currentStep === 2) {
        // if (formData?.organisation_structure) {
        //   setValue('organisation_structure_image', '');
        // } else {
        //   setValue('organisation_structure_files', '');
        // }
        // setValue('isDraft', false);
        // handleSubmit(onSubmit)();
        // return;
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const onSubmit: SubmitHandler<CalculatorFormData> = async (data) => {
    try {
      setLoading(true);
      // await createNewApplication(data, user?.sub);

      setLoading(false);

      reset();
      setCurrentStep(0);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;

      default:
        return null;
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(formData);

  useEffect(() => {
    let total = 0;

    if (formData.hotelTotalTashkent) {
      total += formData.hotelTotalTashkent;
    }

    if (formData.hotelTotalSamarkand) {
      total += formData.hotelTotalSamarkand;
    }

    if (formData.hotelTotalBukhara) {
      total += formData.hotelTotalBukhara;
    }

    if (formData.hotelTotalKhiva) {
      total += formData.hotelTotalKhiva;
    }

    setValue('hotelTotal', total);
  }, [
    formData.hotelTotalTashkent,
    formData.hotelTotalSamarkand,
    formData.hotelTotalKhiva,
    formData.hotelTotalBukhara,
    setValue,
  ]);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: 2 }}
        onClick={handleClickOpen}
      >
        Plan Tour
      </Button>

      <Dialog fullWidth={true} maxWidth={'lg'} open={open}>
        <FormProvider {...methods}>
          <DialogTitle variant="h4">Plan your tour</DialogTitle>
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
                {formData.hotelTotal > 0 && (
                  <>
                    <Typography
                      variant="h4"
                      textAlign={'center'}
                      style={{ marginBottom: 20 }}
                    >
                      Grand Total
                    </Typography>
                    <Typography
                      variant="h2"
                      textAlign={'center'}
                      style={{ marginBottom: 50 }}
                    >
                      $ {formData.hotelTotal}
                    </Typography>
                  </>
                )}

                <Stepper activeStep={currentStep} alternativeLabel>
                  {steps.map((label, index) => (
                    <Step key={index}>
                      <StepLabel StepIconComponent={CustomStepIcon}>
                        <p style={{ fontWeight: 'bold' }}>{label}</p>
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
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </DialogActions>
        </FormProvider>
      </Dialog>
    </>
  );
};

export default PlanTour;
