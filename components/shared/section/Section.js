import PropTypes from 'prop-types';

const Section = (props) => {
  const { className, children } = props;

  return (
    <section className={className}>
      <div className="container">
        <div className="row p-lg-5 p-md-4 p-sm-2 p-xm-1">{children}</div>
      </div>
    </section>
  );
};

Section.defaultProps = {
  className: '',
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default Section;
