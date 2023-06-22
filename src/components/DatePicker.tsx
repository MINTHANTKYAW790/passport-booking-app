// DatePicker.tsx
import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Availability } from "./Timepicker/Timepicker";

// define Props type
interface Props {
    value: Dayjs | null;
    handleDateChange: (value: Dayjs | null) => void;
    availability?: Availability[];
    month?: number;
    handleMonthChange: (month?: number) => void;
}

const DatePicker = ({
    value,
    handleDateChange,
    availability,
    handleMonthChange,
    month,
}: Props) => {
    const selectedMonth = month ? month : dayjs().month();
    const currentMonthAvailability = availability?.filter(
        (item) => item.month === selectedMonth
    );
    console.log("day", availability);

    const shouldDisableDate = (date: Dayjs | null) => {
        const currentDate = currentMonthAvailability?.find(
            (item) => item.date === date?.format("DD/MM/YYYY")
        );

        const isAvailable = currentDate?.slot.some(
            (item) => item.availableSlot !== 0
        );
        return isAvailable ? false : true;
    };

    return (
        <div className="container">
            <h2>Choose available Date</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                    <DesktopDatePicker
                        label="Choose Date"
                        format="DD/MM/YYYY"
                        value={value} //use first prop
                        shouldDisableDate={shouldDisableDate}
                        onChange={(value) => handleDateChange(value)} //use second prop
                        onMonthChange={(value) =>
                            handleMonthChange(value?.month())
                        }
                        disableHighlightToday
                        inputRef={(params: any) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>
        </div>
    );
};

export default DatePicker;
