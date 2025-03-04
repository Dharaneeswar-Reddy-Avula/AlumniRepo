import React, { useState } from 'react';
import EventsHero from '../../Components/EventsHero';
import UpComingEvents from '../../Components/UpComingEvents';
import PastEvents from '../../Components/PastEvents';
import SomeMemories from '../../Components/SomeMemories';
import { LayoutGridDemo } from "../../accernity/LayoutGridDemo";
import upcoming from "../../assets/event1.jpg"
const EventsPage = () => {
  const events = [
    // { date: new Date(2025, 2, 23), type: 'past', details: 'Past Event Details' },
    { date: new Date(2025, 2, 23), type: 'upcoming', details: upcoming },
    // Add more events as needed
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleDateClick = (date) => {
    const event = events.find(event => event.date.toDateString() === date.toDateString());
    if (event) {
      setModalContent(event.details);
      setSelectedDate(date);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const calendarDays = [];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Render the days of the week
    weekDays.forEach((day, index) => {
      calendarDays.push(<div key={`weekday-${index}`} className="p-2 border border-gray-300 bg-gray-200 text-center">{day}</div>);
    });

    // Fill in the blanks for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div key={`blank-${i}`} className="p-2 border border-gray-300 bg-gray-100 text-gray-400"></div>);
    }

    for (let day = 1; day <= 31; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const event = events.find(event => event.date.toDateString() === date.toDateString());
      let className = 'bg-gray-100 text-gray-400';

      if (day <= daysInMonth) {
        if (event) {
          className = event.type === 'past' ? 'bg-red-200' : 'bg-green-200';
        } else {
          className = '';
        }
      }

      calendarDays.push(
        <div
          key={day}
          className={`p-2 border border-gray-300 text-center cursor-pointer ${className}`}
          onClick={() => day <= daysInMonth && handleDateClick(date)}
        >
          {day}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-1">{calendarDays}</div>;
  };

  return (
    <div className="mt-20 md:mt-28 lg:mt-[140px] mx-6">
      <div className='gap-[20px] grid md:grid-cols-3 grid-cols-1'>
        <div className='md:col-span-2'><EventsHero /></div>
        <div className='md:col-span-1'>
          <div className="flex md:justify-between items-center mb-4 flex-wrap gap-[10px]">
            <button onClick={handlePrevMonth} className="p-2 bg-gray-200 rounded">Previous</button>
            <span>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
            <button onClick={handleNextMonth} className="p-2 px-3 bg-gray-200 rounded ">Next</button>

            <div className="flex justify-start ">
            <input
              type="number"
              value={currentYear}
              onChange={(e) => setCurrentYear(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded "
              min="1900"
              max="2100"
            />
          </div>
          </div>
         
          {renderCalendar()}
        </div>
      </div>
      <UpComingEvents />
      <PastEvents />
      <LayoutGridDemo />
      {/*<SomeMemories/>*/}

      {selectedDate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded relative mt-[100px] ">
            <span className="absolute top-2 right-2 cursor-pointer" onClick={() => setSelectedDate(null)}>&times;</span>
            <img src={modalContent} className='h-[500px] w-[500px] '/>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
