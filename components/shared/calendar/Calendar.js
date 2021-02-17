import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import styles from './calendar.module.scss';
import SvgChevron from '../../svgs/SvgChevron';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const Calendar = ({disableWeekends, disablePreviousDays, disabledDays, onChange}) => {

  const [selectedDay, setSelectedDay] = useState();

  const datepickerRef = useRef();

  const { width } = useWindowDimensions();

  const MONTHS = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const WEEKDAYS_LONG = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  const WEEKDAYS_SHORT = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];

  const birthdays = {
    3: ['2 citas'],
    8: ['1 cita'],
    9: ['1 cita'],
    12: ['2 citas'],
    18: ['1 cita'],
    22: ['2 citas'],
    25: ['1 cita'],
    26: ['1 cita'],
  };

  const getDisabledDays = () => {
    const daysOff = [];
    daysOff.push(...disabledDays);
    if (disableWeekends) {
      daysOff.push({ daysOfWeek: [0, 6] });
    }
    if (disablePreviousDays) {
      daysOff.push({ before: new Date() });
    }
    return daysOff;
  };

  const handleDayClick = (day, { disabled, selected }) => {
    if (disabled) {
      return;
    }
    setSelectedDay(selected ? undefined : day);
    onChange(selected);
  };

  const Navbar = ({
    onPreviousClick,
    onNextClick,
    className
  }) => (
    <div className={className}>
      <span
        style={{
          float:'left',
          transform: 'rotate(180deg)',
          marginLeft: '16px',
          marginTop: '18px'
        }}
        role="button"
        tabIndex="-1"
        onClick={() => onPreviousClick()}
      >
        <SvgChevron />
      </span>
      <span
        style={{
          float:'right',
          marginRight: '16px',
          marginTop: '15px'
        }}
        role="button"
        tabIndex="-1"
        onClick={() => onNextClick()}
      >
        <SvgChevron />
      </span>
    </div>
  );

  function renderDay(day) {
    const date = day.getDate();
    const dateStyle = {
      // position: 'absolute',
      color: 'lightgray',
      bottom: 0,
      right: 0,
      fontSize: 20,
    };
    const birthdayStyle = { fontSize: '0.8em', textAlign: 'left' };
    const cellStyle = {
      height: 50,
      width: 60,
      position: 'relative',
    };
    return (
      <div style={cellStyle}>
        <div style={dateStyle}>{date}</div>
        {birthdays[date] &&
          birthdays[date].map((name, i) => (
            <div key={i} style={birthdayStyle}>
              {name}
            </div>
          ))}
      </div>
    );
  }


  Navbar.propTypes = {
    onPreviousClick: PropTypes.func,
    onNextClick: PropTypes.func,
    className: PropTypes.string
  };

  Navbar.defaultProps = {
    onPreviousClick: null,
    onNextClick: null,
    className: null
  };

  return (
    <div className={styles['datepicker-select']} ref={datepickerRef}>
      <DayPicker
        selectedDays={selectedDay}
        disabledDays={ getDisabledDays() }
        onDayClick={handleDayClick}
        locale="es"
        firstDayOfWeek={1}
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        navbarElement={<Navbar />}
        renderDay={renderDay}
      />
    </div>
  );
};

Calendar.propTypes = {
  disableWeekends: PropTypes.bool,
  disablePreviousDays: PropTypes.bool,
  disabledDays: PropTypes.arrayOf(Date),
  onChange: PropTypes.func
};

Calendar.defaultProps = {
  disableWeekends: false,
  disablePreviousDays: false,
  disabledDays: [],
  onChange: () => { }
};

export default Calendar;
