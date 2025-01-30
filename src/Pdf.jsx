import { useState } from 'react';
import Pdf from 'react-pdf-js';

const PDFViewer = ({ archivo }) => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <Pdf file={archivo} onLoadSuccess={(pdf) => console.log(`Páginas: ${pdf.numPages}`)} page={page} />
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>Anterior</button>
      <button onClick={() => setPage(page + 1)}>Siguiente</button>
    </div>
  );
};

export default PDFViewer;
