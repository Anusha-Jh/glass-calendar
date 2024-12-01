import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./calendar.css";

const Calendar = () => {
  const [currDate, setCurrDate] = useState(new Date()); //setting a state instead of a static variable to allow rernder the component later
  const [calendarDays, setCalendarDays] = useState([]); //also again for various months rerendering calendar
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const setdays = () => {
    //first get the first and last days of the current month to populate the curr calendar month
    const year = currDate.getFullYear();
    const month = currDate.getMonth();
    const firstDayofMonth = new Date(year, month, 1);
    const lastDayofMonth = new Date(year, month + 1, 0);
    //now placing the correct days in the calendar days
    const calendar = [];
    for (let i = 0; i < firstDayofMonth.getDay(); i++) {
      calendar.push(null);
    }
    for (let i = 1; i <= lastDayofMonth.getDate(); i++) {
      calendar.push(i);
    }
    setCalendarDays(calendar);
  };
  useEffect(() => {
    setdays();
  }, [currDate]);

  return (
    <div className="fullPage">
      <div className="calendar-box left">
        <div className="calendar">
          <div className="calendarHeader">
            <ChevronLeft className="c-left left1"></ChevronLeft>
            <div className="calendarTitle">
              <div>{months[currDate.getMonth()]}</div>
              <div>{currDate.getFullYear()}</div>
            </div>
            <ChevronRight className="c-left right1"></ChevronRight>
          </div>
          <div className="days_header">
            {weeks.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="days">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`calendar-day ${
                  day === currDate.getDate() ? "current-day" : ""
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="calendar-box right">
        <div className="calendar">
          <div className="calendarHeader">
            <ChevronLeft className="c left1"></ChevronLeft>
            <div className="calendarTitle">
              <div>{months[currDate.getMonth()]}</div>
              <div>{currDate.getFullYear()}</div>
            </div>
            <ChevronRight className="c right1"></ChevronRight>
          </div>
          <div className="days_header">
            {weeks.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="days">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`calendar-day ${
                  day === currDate.getDate() ? "current-day" : ""
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calendar;
