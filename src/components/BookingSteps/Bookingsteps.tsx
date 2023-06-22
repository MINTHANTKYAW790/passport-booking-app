import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import dayjs, { Dayjs } from "dayjs";
import TimePicker, { Availability } from "../Timepicker/Timepicker";
import DatePicker from "../DatePicker";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const steps = [
    "Choose date and time",
    "Enter your information",
    "Review and confirm",
];

const Bookingsteps = () => {
    //defind 2 new useState hooks
    const [date, setDate] = React.useState<Dayjs | null>(null);
    const [month, setMonth] = React.useState<number>();

    const [availability, setAvilability] = React.useState<Availability[]>();

    React.useEffect(() => {
        fetchData();
    }, [month]); // change depanancy value to month

    const fetchData = async () => {
        // get selscted month
        const selectedMonth = month ? month : dayjs().month();
        const url = `http://localhost:5000/available?month=${selectedMonth}`;
        const response = await fetch(url);
        const data = await response.json();

        setAvilability(data);
    };

    //Get slot from seleted Date(New write )
    const getSelectedDateSlots = (): Availability | undefined => {
        const selectedDateAvailability = availability?.filter(
            (item) => item.date === date?.format("DD/MM/YYYY")
        )[0];
        console.log(selectedDateAvailability);
        return selectedDateAvailability;
    };

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // Render step
    const renderStep = () => {
        if (activeStep === 0) {
            return (
                <>
                    <DatePicker
                        value={date}
                        handleDateChange={setDate}
                        availability={availability}
                        month={month}
                        handleMonthChange={setMonth}
                    />

                    <TimePicker availability={getSelectedDateSlots()} />
                </>
            );
        }
        // Bookingsteps.tsx --> renderStep function
        else if (activeStep === 1) {
            return (
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                    <FormControl
                        variant="standard"
                        sx={{ width: "50%", m: "5px" }}
                    >
                        <InputLabel htmlFor="name">Name:</InputLabel>
                        <Input
                            id="name"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl
                        variant="standard"
                        sx={{ width: "50%", m: "5px" }}
                    >
                        <InputLabel htmlFor="name">Email:</InputLabel>
                        <Input
                            id="email"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl
                        variant="standard"
                        sx={{ width: "50%", m: "5px" }}
                    >
                        <InputLabel htmlFor="nrc">NRC Number:</InputLabel>
                        <Input
                            id="nrc"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl
                        variant="standard"
                        sx={{ width: "50%", m: "5px" }}
                    >
                        <InputLabel htmlFor="dob">Date of birth:</InputLabel>
                        <Input
                            id="dob"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Box>
            );
        }
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                    </Box>
                </>
            ) : (
                <>
                    {renderStep()}
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1
                                ? "Finish"
                                : "Next"}
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
};
export default Bookingsteps;
