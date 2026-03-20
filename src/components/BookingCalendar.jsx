import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./BookingCalendar.css"
import { sanity } from "../sanityClient";
import { useEffect, useState } from "react";


function BookingCalendar({ dateRange, setDateRange }) {
    
    const [bookingInfo, setBookingInfo] = useState({
        fullDays: [],
        checkInDays: [],
        checkOutDays: [],
    });

    useEffect(() => {
        const fetchOccupied = async () => {
            const query = `*[_type == "booking"]{
            from,
            to
            }`;

        const data = await sanity.fetch(query);
        console.log("SANITY DATA:", data);

        const fullDays = [];
        const checkInDays = [];
        const checkOutDays = [];

        data.forEach(range => {
            const start = new Date(range.from);
            const end = new Date(range.to);

            checkInDays.push(new Date(start));
            checkOutDays.push(new Date(end));

            let current = new Date(start);
            current.setDate(current.getDate() + 1);

            while (current < end) {
                fullDays.push(new Date(current));
                current.setDate(current.getDate() + 1);
            }
        });

            setBookingInfo({
                fullDays,
                checkInDays,
                checkOutDays,
            });
        };

        fetchOccupied();
    }, []);
    

    const sameDay = (d1, d2) => d1.toDateString() === d2.toDateString();
    const isFullBooked = (day) =>
        bookingInfo.fullDays.some((d) => sameDay(d, day));
    const isCheckIn = (day) =>
        bookingInfo.checkInDays.some((d) => sameDay(d, day));
    const isCheckOut = (day) =>
        bookingInfo.checkOutDays.some((d) => sameDay(d, day));
    const getTileClassName = ({ date, view }) => {
        if (view !== "month") return null;

        const full = isFullBooked(date);
        const checkIn = isCheckIn(date);
        const checkOut = isCheckOut(date);

        if (full) return "booked-full";
        if (checkIn && checkOut) return "booked-turnover";
        if (checkIn) return "booked-checkin";
        if (checkOut) return "booked-checkout";

        return null;
    };


    return (
    <div className="calendar-wrapper">
      <Calendar
        onChange={setDateRange}
        value={dateRange}
        selectRange={true}
        minDate={new Date()}
        locale="cs-CZ"
        tileClassName={getTileClassName}
        tileDisabled={({ date, view }) =>
          view === "month" && isFullBooked(date)
        }
      />

      <p className="selected-date">
        Vybraný termín:{" "}
        <strong>
          {dateRange[0]
            ? dateRange[0].toLocaleDateString()
            : "—"}
          {" "}–{" "}
          {dateRange[1]
            ? dateRange[1].toLocaleDateString()
            : "—"}
        </strong>
      </p>
    </div>
  );
};

export default BookingCalendar;