import { useState } from "react";
import Day from "./Day";
import Header from "./Header";
import "../styles/calendar.css";

function Calendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const handleClick = (day) => {
    if (!start) {
      setStart(day);
    } else if (!end) {
      setEnd(day);
    } else {
      setStart(day);
      setEnd(null);
    }
  };

  const getType = (day) => {
    if (day === start) return "start";
    if (day === end) return "end";
    if (day > start && day < end) return "range";
    return "";
  };

  return (
    <div className="calendar-card">
      <Header month="April" year="2026" />

      <div className="calendar-grid">
        {days.map((day) => (
          <Day
            key={day}
            day={day}
            onClick={handleClick}
            type={getType(day)}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;