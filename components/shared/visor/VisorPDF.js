import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import SimuladorRepositorio from '../../../services/simulador/simulador.repositorio';
import styles from './visor-pdf.module.scss';

const VisorPDF = ({ data, extension = 'pdf', container }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const pageRef = useRef();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [degree, setDegree] = useState(0);
  const [expand, setExpand] = useState(false);

  const [url, setUrl] = useState('');

  useEffect(async () => {
    const tablaPdf = await SimuladorRepositorio.postSimuladorTablaPdf({
      monto: 6200000,
      periodicidad: 2,
      plazo: 18,
    }).then((resp) => resp);
    // console.log(tablaPdf.data);
    const urlBlob = window.URL.createObjectURL(new Blob([tablaPdf.data], { extension }));
    setUrl(urlBlob);
  }, []);

  const onDocumentLoadSuccess = ({ numPages: nPages }) => setNumPages(nPages);

  const onPageLoadSuccess = (page) => {
    pageRef.current = page;
    console.log(pageRef.current);
  };

  const changePage = (offset) => setPageNumber((prevPageNumber) => prevPageNumber + offset);
  const changeDegree = (degreesAdd) =>
    setDegree((prevDegreesAdd) =>
      degreesAdd + prevDegreesAdd >= 360 ? degreesAdd + prevDegreesAdd - 360 : degreesAdd + prevDegreesAdd
    );

  const previousPage = () => changePage(-1);

  const nextPage = () => changePage(1);

  const turnRight = () => changeDegree(90);

  const turnLeft = () => changeDegree(270);

  const onZoomIn = () => setScale(scale * 1.1);
  const onZoomOut = () => setScale(scale * 0.9);

  const calculateScale = () => {
    const { clientWidth, clientHeight } = container.current;
    const { originalWidth, originalHeight } = pageRef.current;

    const rotated = degree % 180 !== 0;
    const pageWidth = rotated ? originalHeight : originalWidth;
    const pageHeight = rotated ? originalWidth : originalHeight;
    const scaleX = clientWidth / pageWidth;
    const scaleY = clientHeight / pageHeight;

    setExpand(!expand);
    setScale(expand ? scale * scaleX : scale * Math.min(scaleX, scaleY));
  };

  console.log(degree % 180 !== 0 ? 'rotate' : 'no rotate');
  console.log(pageRef.current);

  return (
    <div className={styles['contenedor-pdf']}>
      <Document file="/Hunk-160R-FI-Hero-MotoCorp.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} scale={scale} rotate={degree} onLoadSuccess={onPageLoadSuccess} ref={pageRef} />
      </Document>

      <div>
        <div className="pagec">
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </div>
        <div className="buttonc">
          <button type="button" disabled={pageNumber <= 1} onClick={previousPage} className="Pre">
            Previous
          </button>
          <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
            Next
          </button>
          <button type="button" disabled={pageNumber >= numPages} onClick={onZoomIn}>
            +
          </button>
          <button type="button" disabled={pageNumber >= numPages} onClick={onZoomOut}>
            -
          </button>
          <button type="button" disabled={pageNumber >= numPages} onClick={calculateScale}>
            expand
          </button>
          <button type="button" disabled={pageNumber >= numPages} onClick={turnLeft}>
            izquierda
          </button>
          <button type="button" disabled={pageNumber >= numPages} onClick={turnRight}>
            derecha
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisorPDF;
