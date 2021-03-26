import PropTypes from 'prop-types';
import SvgVector from '../../../../svgs/SvgVector';
import SvgListaPequeña from '../../../../svgs/SvgListaPequeña';
import SvgReloj from '../../../../svgs/SvgReloj';
import styles from './back-office-card-small.module.scss';

const BackOfficeCardSmall = ({ iconoLista, title, subTitle, yellow }) => (
  <div>
    {yellow === false ? (
      <div className={`row ${iconoLista === true ? 'card-simple-blue-sky-small' : 'card-simple-blue-morning-small'}`}>
        <div className="col-4 mt-3">{iconoLista === true ? <SvgListaPequeña /> : <SvgVector />}</div>
        <div className="col-7 pr-0 pl-1 mt-2">
          <h4 className="body1 mb-0">{title}</h4>
          <div className="body3 overline">{subTitle}</div>
        </div>
      </div>
    ) : (
      <div className="row card-simple-yellow-summer-small">
        <div className="col-4 mt-3">
          <SvgReloj />
        </div>
        <div className="col-7 pr-0 pl-1 mt-2">
          <h4 className="body1 mb-0">{title}</h4>
          <div className="body3 overline">{subTitle}</div>
        </div>
      </div>
    )}
  </div>
);
// card-simple-yellow-summer-small
BackOfficeCardSmall.propTypes = {
  iconoLista: PropTypes.bool,
  yellow: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

BackOfficeCardSmall.defaultProps = {
  iconoLista: true,
  yellow: false,
  title: null,
  subTitle: null,
};

export default BackOfficeCardSmall;
