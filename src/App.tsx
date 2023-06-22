// App.tsx

import React, { useEffect, useState } from "react";
import "./App.css";
import DatePicker from "./components/DatePicker";

import TimePicker, {
    Availability,
    Slot,
} from "./components/Timepicker/Timepicker";
import dayjs, { Dayjs } from "dayjs";
import BookingSteps from "./components/BookingSteps/Bookingsteps";
import Bookingsteps from "./components/BookingSteps/Bookingsteps";

function App() {
    return (
        <div className="App">
            <Bookingsteps />

            {/* <Main /> */}
        </div>
    );
}

export default App;
