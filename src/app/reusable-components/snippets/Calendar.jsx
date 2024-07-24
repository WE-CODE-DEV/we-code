import { useRef, useState, useEffect } from "react";
import './Calendar.css';

const Calendar = (props) => {
    const dateObj = new Date();

    const calendarBodyRef = useRef(null);

    const [actualDMY, setActualDMY] = useState({
        date: dateObj.getDate(),
        month: dateObj.getMonth(),
        year: dateObj.getFullYear(),
    });
    
    const [date, setDate] = useState(dateObj.getDate());
    const [month, setMonth] = useState(dateObj.getMonth());
    const [year, setYear] = useState(dateObj.getFullYear());
    const [isCalendarOpen, setCalendarOpen] = useState(true);

    const monthsArr = [
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

    const MonthComponent = () => {
        const monthYearTxt = `${monthsArr[month]} - ${year}`;

        return <ul>
                <li>
                    {
                        monthYearTxt.split("").map((letter, index) => <span key={index} style={{"--animDelay": `${(index + 1) * 0.1}s`}}>{letter}</span>)
                    }
                </li>
               </ul>
    }

    const adjustDay = (day) => (day + 6) % 7;

    const DaysComponent = () => {
        //Empty boxes before month
        const daysBeforeMonth = adjustDay(new Date(year, month, 1).getDay());

        // Getting number of days in month
        const datesInMonth = new Date(year, month + 1, 0).getDate();

        // Getting number of days in previous month
        const datesInPrevMonth = new Date(year, month, 0).getDate();

        //Empty boxes after month
        const daysAfterMonth = 6 - adjustDay(new Date(year, month + 1, 0).getDay());

        const noOfLi = datesInMonth + daysBeforeMonth + daysAfterMonth;

        const delay = 0.035;

        return Array(noOfLi).fill('_').map((_, index) => {
                const dateToBeRendered = index + 1 - daysBeforeMonth;

                let textContent;

                let eleClassName;

                if(index < daysBeforeMonth) {
                    textContent = datesInPrevMonth - (daysBeforeMonth - index - 1);
                    eleClassName = 'dummy';
                }
                else if(dateToBeRendered > datesInMonth) {
                    textContent = dateToBeRendered - datesInMonth;
                    eleClassName = 'dummy';
                }
                else{
                    textContent = dateToBeRendered;
                }

                if(
                    date == dateToBeRendered &&
                    date == actualDMY.date &&
                    month == actualDMY.month &&
                    year == actualDMY.year
                ){
                    eleClassName = "today";
                }

                const setDMY = (date, month, year) => {
                    setActualDMY({date, month, year});

                    calendarBodyRef.current.setAttribute('data-state', 'closing');
                    
                    setTimeout(()=>{
                        setCalendarOpen(false);
                    }, 600);
                }

                return <li className={eleClassName} key={`day-${index}`} onClick={()=>setDMY(dateToBeRendered, month, year)} style={{'--animationDelayForwards': `${index * delay + 0.3}s`, '--animationDelayBackwards': `${(noOfLi - index + 0.15) * delay}s`}}>{textContent}</li>
            });
    }

    const navigateToNxtMonth = () => {
        if(month === 0){
            setMonth(11);
            setYear(year - 1);
        }
        else{
            setMonth(month - 1);
        }
    }

    const navigateToPrevMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        }
        else {
            setMonth(month + 1);
        }
    }

    const showHideCalendar = () => {
        if(!isCalendarOpen){
            setCalendarOpen(true);
        }
        else{
            calendarBodyRef.current.setAttribute('data-state', 'closing');

            setTimeout(()=>{
                setCalendarOpen(false);
            }, 600);
        }
    }

    return (
        <div className="calendar gap-2" data-state={isCalendarOpen ? 'open' : 'close'} ref={calendarBodyRef}>
            <div className="calendar-input">
                <label htmlFor="calendar-trigger" className="flex gap-1">
                    <span className="calendar-input-date">{actualDMY.date}</span>
                    <span className="calendar-input-month">{monthsArr[actualDMY.month]}</span>
                    <span className="calendar-input-year">{actualDMY.year}</span>
                </label>
                <input type="button" id="calendar-trigger" onClick={showHideCalendar} aria-label="Calendar Input"/>
            </div>
            {isCalendarOpen && <div className="calendar-body">
                <div className="calendar-body-header">
                    <button id="prev-btn" aria-label="Previous Month" onClick={navigateToNxtMonth}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{'stopColor': 'rgb(156 163 175)', 'stopOpacity': 1}}/>
                                    <stop offset="100%" style={{'stopColor': 'rgb(253 186 116)', 'stopOpacity': 1}}/>
                                </linearGradient>
                            </defs>
                            <path
                                d="M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z"
                                fill="url(#grad1)" />
                        </svg>
                    </button>
                    <div>
                        <MonthComponent/>
                    </div>
                    <button id="nxt-btn" aria-label="Next Month" onClick={navigateToPrevMonth}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{'stopColor': 'rgb(253 186 116)', 'stopOpacity': 1}}/>
                                    <stop offset="100%" style={{'stopColor': 'rgb(156 163 175)', 'stopOpacity': 1}}/>
                                </linearGradient>
                            </defs>
                            <path
                                d="M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z"
                                fill="url(#grad2)" />
                        </svg>
                    </button>
                </div>
                <hr/>
                <div className="calendar-body-cnts">
                    <ul>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                        <li>Sun</li>
                    </ul>
                    <ul>
                        <DaysComponent/>
                    </ul>
                </div>
            </div>}
        </div>
    );
}

export default Calendar;