import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import styles from './datepicker.module.scss';
import SvgChevron from '../../svgs/SvgChevron';
import useOnClickOutsideRef from '../../../hooks/useOnClickOutsideRef';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const DatePickerInput = ({disableWeekends, disablePreviousDays, disabledDays}) => {

  const [toggle, setToggle] = useState(false);
  const [selectedDay, setSelectedDay] = useState();

  const datepickerRef = useRef();

  const { _, width } = useWindowDimensions();

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
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const Navbar = ({
    /* eslint-disable no-unused-vars */
    nextMonth,
    previousMonth,
    onPreviousClick,
    onNextClick,
    className,
    localeUtils
    /* eslint-enable no-unused-vars */
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

  Navbar.propTypes = {
    nextMonth: PropTypes.instanceOf(Date),
    previousMonth: PropTypes.instanceOf(Date),
    onPreviousClick: PropTypes.func,
    onNextClick: PropTypes.func,
    className: PropTypes.string,
    localeUtils: PropTypes.any
  };

  Navbar.defaultProps = {
    nextMonth: null,
    previousMonth: null,
    onPreviousClick: null,
    onNextClick: null,
    className: null,
    localeUtils: null
  };

  useOnClickOutsideRef(datepickerRef, toggle, handleToggle);

  return (
    <div className={styles['datepicker-select']} ref={datepickerRef}>
      <button
        type="button"
        className={`svg-button-input-small ${styles.arrow} ${toggle ? styles['arrow-active'] : ''}`}
        onClick={() => handleToggle()}
        tabIndex="-1"
      >
        <SvgChevron />
      </button>
      <button
        type="button"
        className={`${!selectedDay && styles['placeholder-color']} ${styles['select-small-blue']}
                    ${toggle ? styles['indicador-activo'] : styles.indicador}`}
        onClick={() => handleToggle()}
        tabIndex="0"
      >
        { selectedDay ? selectedDay.toLocaleDateString() : 'Fecha' }
      </button>
      <div className={`${styles['dropdowm-calendar']} ${toggle ? '' : styles['dropdowm-calendar-hide']}`}>
        <DayPicker
          selectedDays={selectedDay}
          disabledDays={ getDisabledDays() }
          numberOfMonths={ width < 768 ? 1 : 2 }
          onDayClick={handleDayClick}
          locale="es"
          firstDayOfWeek={1}
          months={MONTHS}
          weekdaysLong={WEEKDAYS_LONG}
          weekdaysShort={WEEKDAYS_SHORT}
          navbarElement={<Navbar />}
        />
      </div>
    </div>
  );
};

DatePickerInput.propTypes = {
  disableWeekends: PropTypes.bool,
  disablePreviousDays: PropTypes.bool,
  disabledDays: PropTypes.arrayOf(Date)
};

DatePickerInput.defaultProps = {
  disableWeekends: false,
  disablePreviousDays: false,
  disabledDays: []
};

export default DatePickerInput;
