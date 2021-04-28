import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import styles from '../datepicker.module.scss';
import useOnClickOutsideRef from '../../../../hooks/useOnClickOutsideRef';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import DatePickerNavbar from '../navbar/DatePickerNavbar';
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../../../constants/date';
import SvgChevron from '../../../svgs/SvgChevron';
import SvgCalendario from '../../../svgs/iconos/SvgCalendario';

const RangeDatepickerInput = ({ orientation }) => {
  const [toggle, setToggle] = useState(false);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [enteredTo, setEnteredTo] = useState(null);

  const handleToggle = () => setToggle(!toggle);

  const datepickerRef = useRef();
  const { width } = useWindowDimensions();
  useOnClickOutsideRef(datepickerRef, toggle, handleToggle);

  const handleResetClick = () => {
    setFrom(null);
    setTo(null);
    setEnteredTo(null);
  };

  const isSelectingFirstDay = (currentFrom, currentTo, currentDay) => {
    const isBeforeFirstDay = currentFrom && DateUtils.isDayBefore(currentDay, currentFrom);
    const isRangeSelected = currentFrom && currentTo;
    return !currentFrom || isBeforeFirstDay || isRangeSelected;
  };

  const handleDayClick = (day) => {
    if (from && to && day >= from && day <= to) {
      handleResetClick();
      return;
    }
    if (isSelectingFirstDay(from, to, day)) {
      setFrom(day);
      setTo(null);
      setEnteredTo(null);
    } else {
      setTo(day);
      setEnteredTo(day);
    }
  };

  const handleDayMouseEnter = (day) => {
    if (!isSelectingFirstDay(from, to, day)) {
      setEnteredTo(day);
    }
  };

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
        className={`${!from && styles['placeholder-color']} ${styles['range-date']}
                    ${toggle ? styles['indicador-activo-range'] : styles['indicador-range']}`}
        onClick={() => handleToggle()}
        tabIndex="0"
      >
        <SvgCalendario />
        <span>
          {from && to
            ? `${from.toLocaleDateString('es-ES', {
                month: 'short',
                day: 'numeric',
              })} - ${to.toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}`
            : 'Seleccione rango'}
        </span>
      </button>
      <div
        className={`${styles['dropdowm-calendar']} ${toggle ? '' : styles['dropdowm-calendar-hide']} ${
          orientation === 'right' ? styles['orientation-right'] : ''
        }`}
      >
        <DayPicker
          className="Range"
          numberOfMonths={width < 768 ? 1 : 2}
          fromMonth={from}
          selectedDays={[from, { from, to: enteredTo }]}
          disabledDays={{ before: from }}
          onDayClick={handleDayClick}
          locale="es"
          modifiers={{ start: from, end: enteredTo }}
          onDayMouseEnter={handleDayMouseEnter}
          firstDayOfWeek={1}
          months={MONTHS}
          weekdaysLong={WEEKDAYS_LONG}
          weekdaysShort={WEEKDAYS_SHORT}
          navbarElement={<DatePickerNavbar />}
        />
      </div>
    </div>
  );
};

RangeDatepickerInput.propTypes = {
  orientation: PropTypes.oneOf(['right', 'left']),
};

RangeDatepickerInput.defaultProps = {
  orientation: 'right',
};

export default RangeDatepickerInput;
