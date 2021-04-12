import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import SimuladorRepositorio from '../../../services/simulador/simulador.repositorio';
import styles from './visor-pdf.module.scss';

const VisorPDF = ({ data, extension = 'pdf', container }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  const FIT_LABELS = {
    page: 'Fit to Page',
    width: 'Fit to Width',
  };
  const pageRef = useRef();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [fitTo, setFitTo] = useState();
  const [grades, setGrades] = useState(0);

  const [url, setUrl] = useState('');

  // console.log(container);

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
    // pageRef.current = page;
    console.log(page);
  };

  const changePage = (offset) => setPageNumber((prevPageNumber) => prevPageNumber + offset);

  const previousPage = () => changePage(-1);

  const nextPage = () => changePage(1);

  const turnRight = () => setGrades(90 + grades);

  const turnLeft = () => setGrades(270 + grades);

  const nextFit = (fitTo) => (fitTo === 'page' ? 'width' : 'page');

  const onZoomIn = () => setScale(scale * 1.1);
  const onZoomOut = () => setScale(scale * 0.9);

  console.log(pageRef.current);

  return (
    <div className={styles['contenedor-pdf']}>
      <Document file="/Hunk-160R-FI-Hero-MotoCorp.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} scale={scale} rotate={grades} onLoadSuccess={onPageLoadSuccess} ref={pageRef} />
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
          <button type="button" disabled={pageNumber >= numPages} onClick={() => onZoomToFit(nextFit(fitTo))}>
            expand
          </button>
          <button type="button" disabled={pageNumber >= numPages} onClick={() => turnLeft()}>
            izquierda
          </button>
          <button type="button" disabled={pageNumber >= numPages} onClick={() => turnRight()}>
            derecha
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisorPDF;
