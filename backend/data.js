// backend/data.js

const availableSlot = [
    {
        date: "24/06/2023",
        month: 5,
        slot: [
            { time: "09:00", total: 100, booked: 100, availableSlot: 0 },
            { time: "10:00", total: 100, booked: 100, availableSlot: 0 },
            { time: "11:00", total: 100, booked: 100, availableSlot: 0 },
            { time: "12:00", total: 100, booked: 100, availableSlot: 0 },
            { time: "13:00", total: 200, booked: 200, availableSlot: 1 },
        ],
    },
    {
        date: "22/06/2023",
        month: 5,
        slot: [
            { time: "14:00", total: 100, booked: 70, availableSlot: 30 },
            { time: "15:00", total: 100, booked: 20, availableSlot: 80 },
            { time: "16:00", total: 100, booked: 100, availableSlot: 0 },
            { time: "17:00", total: 100, booked: 50, availableSlot: 50 },
            { time: "18:00", total: 200, booked: 170, availableSlot: 30 },
        ],
    },
    {
        date: "23/06/2023",
        month: 5,
        slot: [
            { time: "09:00", total: 100, booked: 80, availableSlot: 20 },
            { time: "10:00", total: 100, booked: 20, availableSlot: 80 },
            { time: "11:00", total: 100, booked: 100, availableSlot: 0 },
            { time: "12:00", total: 100, booked: 50, availableSlot: 50 },
            { time: "13:00", total: 200, booked: 170, availableSlot: 30 },
        ],
    },
    {
        date: "24/07/2023",
        month: 6,
        slot: [
            { time: "09:00", total: 100, booked: 80, availableSlot: 20 },
            { time: "10:00", total: 100, booked: 20, availableSlot: 80 },
            { time: "11:00", total: 100, booked: 100, availableSlot: 0 },
            { time: "12:00", total: 100, booked: 50, availableSlot: 50 },
            { time: "13:00", total: 200, booked: 170, availableSlot: 30 },
        ],
    },
    {
        date: "25/07/2023",
        month: 6,
        slot: [
            { time: "09:00", total: 100, booked: 100, availableSlot: 0 },
            { time: "10:00", total: 100, booked: 100, availableSlot: 0 },
            { time: "11:00", total: 100, booked: 100, availableSlot: 0 },
            { time: "12:00", total: 100, booked: 100, availableSlot: 0 },
            { time: "13:00", total: 200, booked: 200, availableSlot: 0 },
        ],
    },
];

module.exports = availableSlot;
