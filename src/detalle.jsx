

import { useParams } from 'react-router-dom';

function Detalle() {
    let { title } = useParams();
    const formattedTitle = title.replace(/-/g, ' ');
  console.log(formattedTitle)
    return (
        <iframe
        src={`/${formattedTitle}.pdf`}
        width="100%"
        height="850px"
        style={{ border: 'none' }}
      />
    
//     <div className="container my-4">
//         {/* Top Border */}
//         <div className="row">
//           <div className="col">
//             <div className="border-top border-5 border-warning mb-4"></div>
//           </div>
//         </div>
  
//         {/* Content Container */}
//         <div className="row g-4">
//           {/* Left Column */}
//           <div className="col-12 col-md-6">
//             <h2 className="fw-bold mb-3">CREENCIAS ESPIRITUALES Y RELIGIOSAS</h2>
//             <div className="row">
//               <div className="col-12">
//                 <p style={{
//                     fontSize:'1vw'
//                 }} className="text-justify">
//                 Los habitantes de Lloró, son intensamente creyentes y
// consideran que las fuerzas espirituales de la naturaleza
// pueden ser usadas para recuperar la salud o causar
// enfermedades. También se cree en un Dios de misericordia y
// castigador.<br/><br/>
// La espiritualidad de los lloroseños es una rica mezcla de
// influencias africanas, indígenas y católicas. Esta combinación
// no solo define su identidad cultural, sino que también refuerza
// su conexión con la naturaleza y con los espíritus que creen
// que habitan en su entorno. Sus creencias y prácticas son una
// forma de mantener viva la herencia de sus ancestros,
// adaptándola a los tiempos modernos. En este sentido la
// iglesia tiene un papel importante en las festividades y
// ceremonias.
// <br/><br/>
// Celebran eventos como la Semana Santa, el Día de Todos los
// Santos, y las novenas, acompañadas de cantos y rezos
// comunitarios; muchas prácticas espirituales están
// influenciadas por la tradición afrodescendiente, que incluye
// creencias en espíritus ancestrales, protección espiritual y el
// uso de rituales para invocar energías protectoras.<br/><br/>
// Los lloroseños pueden realizar oraciones, cantos o danzas
// específicas que recuerdan las tradiciones africanas de sus
// ancestros.
//                 </p>
//               </div>
//             </div>
//             {/* <div className="row mt-3">
//               <div className="col-12">
//                 <figure className="figure">
//                   <img
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0hBLygsEskNtPu5aBiy6JOz75NcUyw.png"
//                     alt="Parroquia Inmaculada Concepción Lloró"
//                     className="figure-img img-fluid rounded"
//                   />
                 
//                 </figure>
//               </div>
//             </div> */}
//           </div>
  
//           {/* Right Column */}
//           <div className="col-12 col-md-6">
//             {/* <h2 className="fw-bold mb-3">Veneración de santos</h2> */}
//             <div className="row">
//               <div className="col-12">
//                 <h3 className="fw-bold">Veneración de santos:</h3>
//                 <p style={{
//                     fontSize:'1vw'
//                 }} className="text-justify">
//                 Los santos tienen un papel importante,
// y su culto está impregnado de elementos culturales propios.<br/><br/>
// Por ejemplo, en la celebración de la Virgen del Carmen, San
// Antonio, Niña María, La Virgen Inmaculada Santo Cristo y San
// Roque.
//                 </p>
//               </div>
//             </div>
//             <div className="row mt-3">
//               <div className="col-12">
//                 <figure className="figure">
//                   <img
//                     src="/imagenes/religiosos.png"
//                     alt="Chinango"
//                     className="figure-img img-fluid rounded"
//                   />
                 
//                 </figure>
//               </div>
//             </div>
//           </div>
//         </div>
  
//         {/* Bottom Border */}
//         <div className="row">
//           <div className="col">
//             <div className="border-bottom border-5 border-warning mt-4"></div>
//           </div>
//         </div>
//       </div>
   )
}
export default Detalle
