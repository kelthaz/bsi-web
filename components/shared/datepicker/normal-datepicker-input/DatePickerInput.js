import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import styles from '../datepicker.module.scss';
import SvgChevron from '../../../svgs/SvgChevron';
import useOnClickOutsideRef from '../../../../hooks/useOnClickOutsideRef';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import DatePickerNavbar from '../navbar/DatePickerNavbar';
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../../../constants/date';

const DatePickerInput = ({ disableWeekends, disablePreviousDays, disabledDays, onChange, orientation }) => {
  const [toggle, setToggle] = useState(false);
  const [selectedDay, setSelectedDay] = useState();

  const datepickerRef = useRef();

  const { width } = useWindowDimensions();

  const getDisabledDays = () => {
    const daysOff = [];
    daysOff.push(...disabledDays);

    if (disableWeekends) {
      daysOff.push({ daysOfWeek: [0] });
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
    onChange(day);
  };

  const handleToggle = () => {
    setToggle(!toggle);
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
        className={`${!selectedDay && styles['placeholder-color']} ${styles['normal-date']}
                    ${toggle ? styles['indicador-activo'] : styles.indicador}`}
        onClick={() => handleToggle()}
        tabIndex="0"
      >
        {selectedDay
          ? selectedDay.toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' })
          : 'Fecha '}
      </button>
      <div
        className={`${styles['dropdowm-calendar']} ${toggle ? '' : styles['dropdowm-calendar-hide']} ${
          orientation === 'right' ? styles['orientation-right'] : ''
        }`}
      >
        <DayPicker
          className="Normal"
          selectedDays={selectedDay}
          disabledDays={getDisabledDays()}
          numberOfMonths={width < 768 ? 1 : 2}
          onDayClick={handleDayClick}
          locale="es"
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

DatePickerInput.propTypes = {
  disableWeekends: PropTypes.bool,
  disablePreviousDays: PropTypes.bool,
  orientation: PropTypes.oneOf(['right', 'left']),
  disabledDays: PropTypes.arrayOf(Date),
  onChange: PropTypes.func,
};

DatePickerInput.defaultProps = {
  disableWeekends: false,
  disablePreviousDays: false,
  orientation: 'right',
  disabledDays: [],
  onChange: () => {},
};

export default DatePickerInput;
