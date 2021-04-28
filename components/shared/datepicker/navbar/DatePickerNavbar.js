import PropTypes from 'prop-types';
import SvgChevron from '../../../svgs/SvgChevron';
import styles from '../datepicker.module.scss';

const DatePickerNavbar = ({ onPreviousClick, onNextClick, className }) => (
  <div className={className}>
    <button
      id="previousMonth"
      className={styles['previous-month']}
      type="button"
      tabIndex="-1"
      onClick={() => onPreviousClick()}
    >
      <SvgChevron />
    </button>
    <button id="nextMonth" className={styles['next-month']} type="button" tabIndex="-1" onClick={() => onNextClick()}>
      <SvgChevron />
    </button>
  </div>
);

DatePickerNavbar.propTypes = {
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func,
  className: PropTypes.string,
};

DatePickerNavbar.defaultProps = {
  onPreviousClick: null,
  onNextClick: null,
  className: null,
};

export default DatePickerNavbar;
