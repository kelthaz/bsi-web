import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import PropTypes from 'prop-types';
// import SimuladorRepositorio from '../../../services/simulador/simulador.repositorio';
import dynamic from 'next/dynamic';
import SvgArrow from '../../svgs/pdf-visor/SvgArrow';
import SvgDownload from '../../svgs/pdf-visor/SvgDownload';
import SvgExpand from '../../svgs/pdf-visor/SvgExpand';
import SvgMinus from '../../svgs/pdf-visor/SvgMinus';
import SvgPlus from '../../svgs/pdf-visor/SvgPlus';
import SvgTurn from '../../svgs/pdf-visor/SvgTurn';
import styles from './visor-pdf.module.scss';

const VisorPDF = ({ data, extension, container }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const pageRef = useRef();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [degree, setDegree] = useState(0);
  const [expand, setExpand] = useState(false);
  // const [url, setUrl] = useState('');

  const calculateScaleX = () => {
    const { clientWidth } = container.current;
    const { originalWidth, originalHeight } = pageRef.current;

    const rotated = degree % 180 !== 0;
    const pageWidth = rotated ? originalHeight : originalWidth;
    const scaleX = clientWidth / pageWidth;

    return scaleX;
  };

  // useEffect(async () => {
  // const tablaPdf = await SimuladorRepositorio.postSimuladorTablaPdf({
  //   monto: 6200000,
  //   periodicidad: 2,
  //   plazo: 18,
  // }).then((resp) => resp);
  // // console.log(tablaPdf.data);
  // const urlBlob = window.URL.createObjectURL(new Blob([tablaPdf.data], { extension }));
  // setUrl(urlBlob);
  // }, []);

  const onDocumentLoadSuccess = ({ numPages: nPages }) => setNumPages(nPages);

  const onPageLoadSuccess = (page) => {
    pageRef.current = page;
  };

  const changePage = (offset) => setPageNumber((prevPageNumber) => prevPageNumber + offset);
  const changeDegree = (degreesAdd) =>
    setDegree((prevDegreesAdd) =>
      degreesAdd + prevDegreesAdd >= 360 ? degreesAdd + prevDegreesAdd - 360 : degreesAdd + prevDegreesAdd
    );

  const changeScale = (newScale) => {
    setExpand(newScale >= calculateScaleX());
    setScale(newScale);
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);
  const turnRight = () => changeDegree(90);
  const turnLeft = () => changeDegree(270);
  const onZoomIn = () => changeScale(scale * 1.1);
  const onZoomOut = () => changeScale(scale * 0.9);
  const onExpand = () => changeScale(scale >= calculateScaleX() ? 1 : calculateScaleX());

  return (
    <>
      <div className={`${styles['container-visor-pdf']} ${expand ? styles.expand : ''}`}>
        <Document file="/Hunk-160R-FI-Hero-MotoCorp.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} rotate={degree} onLoadSuccess={onPageLoadSuccess} />
        </Document>
      </div>
      <div className={styles['container-controls-visor-pdf']}>
        <div className={styles['buttons-controls-visor-pdf']}>
          <button type="button">
            <SvgDownload />
          </button>
          <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
            <SvgArrow />
          </button>
          <button className={styles['turn-arrow']} type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
            <SvgArrow />
          </button>
          <button type="button" disabled={pageNumber >= numPages} onClick={turnLeft}>
            <SvgTurn />
          </button>
          <span>
            {pageNumber} / {numPages}
          </span>
          <button className={styles['turn-right']} type="button" onClick={turnRight}>
            <SvgTurn />
          </button>
          <button type="button" disabled={pageNumber >= numPages} onClick={onZoomIn}>
            <SvgPlus />
          </button>
          <button type="button" disabled={pageNumber >= numPages} onClick={onZoomOut}>
            <SvgMinus />
          </button>
          <button type="button" onClick={onExpand} className={expand ? styles['turn-expand'] : ''}>
            <SvgExpand />
          </button>
        </div>
      </div>
    </>
  );
};

VisorPDF.propTypes = {
  data: PropTypes.string,
  extension: PropTypes.string,
  container: PropTypes.any.isRequired,
};

VisorPDF.defaultProps = {
  data: null,
  extension: 'pdf',
};

export default VisorPDF;
