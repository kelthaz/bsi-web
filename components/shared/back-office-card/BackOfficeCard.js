import PropTypes from 'prop-types';
import SvgAgendarCita from '../../svgs/SvgAgendarCita';
import SvgListCheckBackOffice from '../../svgs/SvgListCheckBackOffice';
import styles from './back-office-card.module.scss';

const BackOfficeCard = ({ iconoAgendar, title, subTitle, haveButton }) => (
  <div className={`row ${iconoAgendar === true ? 'card-simple-blue-sky' : 'card-simple-blue-morning'}`}>
    <div className="col-2 mt-4">{iconoAgendar === true ? <SvgAgendarCita /> : <SvgListCheckBackOffice />}</div>
    <div className="col-7 mt-4 pr-0 pl-1">
      <h4 className="body1">{title}</h4>
      <div className="body3">{subTitle}</div>
    </div>
    {haveButton === true ? (
      <div className={`col-3 mt-5 px-0 ${styles.button}`}>
        <button className="btn-link-arrow-right-inverted" type="button">
          Ver detalle
        </button>
      </div>
    ) : null}
  </div>
);

BackOfficeCard.propTypes = {
  iconoAgendar: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  haveButton: PropTypes.bool,
};

BackOfficeCard.defaultProps = {
  iconoAgendar: true,
  title: null,
  subTitle: null,
  haveButton: true,
};

export default BackOfficeCard;
