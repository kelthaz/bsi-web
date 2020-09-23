// import styles from './section.module.scss';

export const Section = (props) => {
  const { className, children } = props;

  return (
    <section className={className}>
      <div className="container">
        <div className="row p-lg-5 p-md-4 p-sm-2 p-xm-1">{children}</div>
      </div>
    </section>
  );
};

export default Section;
