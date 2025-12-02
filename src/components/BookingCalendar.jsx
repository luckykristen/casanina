import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./BookingCalendar.css"
import { sanity } from "../sanityClient";
import { useEffect, useState } from "react";


function BookingCalendar() {
    const [date, setDate] = useState(new Date());
    const [occupiedDates, setOccupiedDates] = useState([]);

    useEffect(() => {
        const fetchOccupied = async () => {
            const query = `*[_type == "booking"]{
            from,
            to
            }
        `;

        const data = await sanity.fetch(query);
        console.log("SANITY DATA:", data);

        const days = [];

        data.forEach(range => {
            let current = new Date(range.from);
            const end = new Date(range.to);

            while (current <= end) {
                days.push(new Date(current));
                current.setDate(current.getDate() + 1);
            }
        });

            setOccupiedDates(days);
        };

        fetchOccupied();
    }, []);
    

    const isBooked = (day) => {
        return occupiedDates.some(
            booked =>
                booked.toDateString() === day.toDateString()
        );
    }

    return (
        <div className="calendar-wrapper">
            <Calendar
            onChange={setDate}
            value={date}
            minDate={new Date()}
            locale="cs-CZ"
            tileDisabled={({ date, view }) => 
            view === "month" &&
                occupiedDates.some(
                    d => d.toDateString() === date.toDateString()
            )
        }
            tileClassName={({ date }) =>
                isBooked(date) ? "booked-day" : null
        }
            />

            <p className="selected-date">
                Vybraný termín: {" "} 
                <strong>{date.toLocaleDateString()}</strong>
            </p>
        </div>
    )
}

export default BookingCalendar;