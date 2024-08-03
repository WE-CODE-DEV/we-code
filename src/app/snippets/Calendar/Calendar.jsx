import { useRef, useState, useEffect } from "react";
// import './Calendar.css';
import styled from "styled-components";

const CalendarComponent = styled.div`

&[data-theme="dark"]{
  --priBg: 28, 28, 40;
  --pri: #1e2022;
  --sec: #22262f;
  --mildClr: #9ca3af;
}

&[data-theme="light"]{
  --priBg: 28, 28, 40;
  --pri: #fff;
  --sec: #dbeafe;
  --mildClr: #2563eb;
}

.calendar {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .6s;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1.2);
}

.calendar[data-state='open']{
  transform: translateY(-10rem);
}

.calendar-input {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.375rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 0.75rem;
  background: var(--pri);
  box-shadow: rgba(var(--priBg), 0.4) 0px 2px 4px, rgba(var(--priBg), 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.calendar-input label {
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
  position: relative;
}

&[data-theme="dark"] .calendar-input label,
&[data-theme="dark"] .calendar-body-header{
  color: #e4e4e7;
}

&[data-theme="light"] .calendar-input label,
&[data-theme="light"] .calendar-body-header{
  font-weight: 600;
  color: #1e3a8a;
}

.calendar-input input[type='button'] {
  height: 1.25rem;
  width: 1.25rem;
  cursor: pointer;
}

&[data-theme='dark'] .calendar-input input[type='button']{
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Z' stroke='%23d1d5db' stroke-width='1.5'/%3E%3Cpath d='M7 4V2.5M17 4V2.5M2.5 9h19' stroke='%23d1d5db' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M18 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' fill='%23d1d5db'/%3E%3C/svg%3E%0A");
}

&[data-theme='light'] .calendar-input input[type='button']{
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Z' stroke='%232563eb' stroke-width='1.5'/%3E%3Cpath d='M7 4V2.5M17 4V2.5M2.5 9h19' stroke='%232563eb' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M18 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' fill='%232563eb'/%3E%3C/svg%3E%0A");
}

.calendar-input label::before {
  pointer-events: none;
  position: absolute;
  right: -0.75rem;
  height: 100%;
  width: 0px;
  border-width: 1px;
  border-color: var(--mildClr);
  opacity: 0.2;
  content: '';
}

.calendar-body {
  position: absolute;
  width: 20rem;
  border-radius: 0.5rem;
  display: none;
  top: calc(100% + .5rem);
  background: var(--pri);
  box-shadow: rgba(var(--priBg), 0.4) 0px 2px 4px, rgba(var(--priBg), 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.calendar[data-state='open'] .calendar-body{
  display: flex;
  clip-path : circle(0% at 70% 0%);
  animation: show-calendar .6s ease-in forwards;
}

.calendar[data-state='closing'] .calendar-body{
  display: flex;
  clip-path : circle(150% at 70% 0%);
  pointer-events: none;
  animation: close-calendar .6s ease-out .3s forwards;
}

.calendar[data-state='close'] .calendar-body{
  display: none;
}

@keyframes show-calendar{
  to{
    clip-path : circle(150% at 70% 0%);
  }
}

@keyframes close-calendar{
  to{
    clip-path : circle(0% at 70% 0%);
  }
}

.calendar-body {
  flex-direction: column;
  gap: 0.375rem;
  padding: 1rem;
}

.calendar-body-header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.75rem;
  /* font-weight: 600; */
  /* color: #e5e7eb; */
}

.calendar-body-header button {
  cursor: pointer;
  border-radius: 0.375rem;
  border-width: 1px;
  padding: 0.375rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

&[data-theme="dark"] .calendar-body-header button{
  border-color: #fdbb7491;
}

&[data-theme="light"] .calendar-body-header button{
  border-color: #3b83f686;
}

&[data-theme="dark"] .calendar-body-header button:hover {
  border-color: #fdba74;
}

&[data-theme="light"] .calendar-body-header button:hover {
  border-color: #3b82f6;
}

.calendar-body-header button:active {
  --tw-scale-x: .9;
  --tw-scale-y: .9;
  transform: scaleX(.9) scaleY(.9);
}

.calendar-body-header button{
  background: var(--sec);
}

.calendar-body-header button svg {
  height: 1.25rem;
  width: 1.25rem;
}

.calendar-body-header div{
  --currentMonth: 0;
  height: 2rem;
  width: 12rem;
  overflow: hidden;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.05em;
}

.calendar-body-header div ul {
  position: relative;
  height: 100%;
  width: 100%;
}

.calendar-body-header div ul li{
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  text-transform: uppercase;
}

.calendar[data-state='open'] .calendar-body-header div ul li span{
  transform: translateY(-.5rem);
  opacity: 0;
  animation: month-anim .6s ease var(--animDelay) forwards;
}

.calendar[data-state='closing'] .calendar-body-header div ul li span{
  transform: translateY(0);
  opacity: 1;
  animation: month-anim-backwards .6s ease var(--animDelay) forwards;
}

@keyframes month-anim{
  to{
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes month-anim-backwards{
  to{
    transform: translateY(-.5rem);
    opacity: 0;
  }
}

.calendar-body-header div ul li span {
  font-size: 0.75rem;
  line-height: 1rem;
  transform: translateY(-.5rem);
  opacity: 0;
}

.calendar-body-cnts {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.calendar-body-cnts ul{
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.375rem;
}

.calendar-body-cnts ul:nth-of-type(1) li {
  display: flex;
  height: 2rem;
  width: 2rem;
  align-items: center;
  justify-content: center;
  font-size: .7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

&[data-theme="dark"] .calendar-body-cnts ul:nth-of-type(1) li{
  color: #9ca3af;
}

&[data-theme="light"] .calendar-body-cnts ul:nth-of-type(1) li{
  color: #1e40af;
  opacity: .8;
  font-weight: 600;
}

.calendar-body-cnts ul:nth-of-type(2) li {
  display: flex;
  height: 2rem;
  width: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  line-height: 1rem;
  background: var(--sec);
  transform: translate(-10%, -10%);
  opacity: 0;
}

.calendar-body-cnts ul:nth-of-type(2) li:not(.dummy) {
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

&[data-theme="dark"] .calendar-body-cnts ul:nth-of-type(2) li:not(.dummy){
  color: #d1d5db;
}

&[data-theme="light"] .calendar-body-cnts ul:nth-of-type(2) li:not(.dummy){
  color: #1e3a8a;
  font-weight: 600;
}

&[data-theme="dark"] .calendar-body-cnts ul:nth-of-type(2) li:not(.dummy):hover {
  border-color: rgb(253 186 116 / 0.5);
  border-color: rgb(253, 186, 116);
  color: #f9fafb;
}

&[data-theme="light"] .calendar-body-cnts ul:nth-of-type(2) li:not(.dummy):hover {
  border-color: rgb(59 130 246 / .5);
  color: #172554;
}

.calendar[data-state='open'] .calendar-body-cnts ul:nth-of-type(2) li{
  animation: dates-forward-anim .6s cubic-bezier(0.23, 1, 0.32, 1.2) var(--animationDelayForwards) forwards;
}

.calendar[data-state='closing'] .calendar-body-cnts ul:nth-of-type(2) li{
  opacity: 1;
  transform: translate(0, 0);
  animation: dates-backward-anim .6s cubic-bezier(0.23, 1, 0.32, 1.2) var(--animationDelayBackwards) forwards;
}

.calendar-body[data-state='navigate'] .calendar-body-cnts ul:nth-of-type(2) li{
  opacity: 1;
  transform: translate(0, 0);
  animation: dates-backward-anim .6s cubic-bezier(0.23, 1, 0.32, 1.2) var(--animationDelayBackwards) forwards;
}

.calendar-body[data-state='navigate'] .calendar-body-header div ul li span{
  transform: translateY(0);
  opacity: 1;
  animation: month-anim-backwards .6s ease var(--animDelay) forwards;
}

.calendar-body-cnts ul:nth-of-type(2) li.today {
  border-style: solid;
  font-weight: 600;
}

&[data-theme="dark"] .calendar-body-cnts ul:nth-of-type(2) li.today{
  border-color: #fdba74;
  color: #fdba74;
}

&[data-theme="light"] .calendar-body-cnts ul:nth-of-type(2) li.today{
  border-color: #3b82f6;
  color: #172554;
}

.calendar-body-cnts ul:nth-of-type(2) li.dummy {
  cursor: not-allowed;
}

&[data-theme="dark"] .calendar-body-cnts ul:nth-of-type(2) li.dummy{
  color: #6b7280;
}

&[data-theme="light"] .calendar-body-cnts ul:nth-of-type(2) li.dummy{
  color: #172554a8;
}

@keyframes dates-forward-anim{
  to{
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes dates-backward-anim{
  to{
    opacity: 0;
    transform: translate(-10%, -10%);
  }
}

.calendar-body hr {
  margin-top: 0.375rem;
  border-width: 1px;
  border-style: dashed;
  -webkit-mask-image: linear-gradient(to right, transparent, #000, transparent);
  mask-image: linear-gradient(to right, transparent, #000, transparent);
}

&[data-theme='dark'] .calendar-body hr{
  border-color: #374151;
}

&[data-theme='light'] .calendar-body hr{
  border-color: #60a5fa;
}
`;

const Calendar = ( props ) => {
    const dateObj = new Date();

    const componentRef = useRef(null);

    const theme = props.theme || 'dark';

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

    useEffect(() => {
      if(componentRef.current) componentRef.current.style.opacity = 1;
    }, [props.theme])

    return (
        <CalendarComponent data-theme={theme} ref={componentRef} style={{opacity: 0}}>
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
                                    <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{'stopColor': (theme === 'dark') ? '#9ca3af' : '#3b82f6', 'stopOpacity': 1}}/>
                                        <stop offset="100%" style={{'stopColor': (theme === 'dark') ? '#fdba74' : '#1d4ed8', 'stopOpacity': 1}}/>
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z"
                                    fill="url(#grad5)" />
                            </svg>
                        </button>
                        <div>
                            <MonthComponent/>
                        </div>
                        <button id="nxt-btn" aria-label="Next Month" onClick={navigateToPrevMonth}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{'stopColor': (theme === 'dark') ? '#fdba74' : '#3b82f6', 'stopOpacity': 1}}/>
                                        <stop offset="100%" style={{'stopColor': (theme === 'dark') ? '#9ca3af' : '#1d4ed8', 'stopOpacity': 1}}/>
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z"
                                    fill="url(#grad6)" />
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
        </CalendarComponent>
    );
}

export default Calendar;