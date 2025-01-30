import { categories } from "./assets/data/categories"
import imagen from "./assets/img.svg";
import { Link } from 'react-router-dom';

function Card() {
    console.log(categories)
 
    return (
        <div className="container mt-4">
            <div className="row g-3">
           {categories.map((category, index) => (
  
     <div className="col-md-6 col-lg-4" key={index}>
          <Link to={`/detalles/${category.title.toLocaleLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none', color: 'inherit' }}>  
         <div className="card h-100">
    <img 
        src={category.image} 
        alt={category.title} 
        className="card-img-top"
        onError={(e) => { e.target.src = imagen; }}
        style={{
            width: "100%", 
            height: "180px", 
            objectFit: "cover"
        }}
    />
    <div className="card-body d-flex flex-column">
        <h4 className="card-title">{category.title}</h4>
        <p className="card-text flex-grow-1">{category.description}</p>
    </div>
</div>
</Link>   
     </div>
      
          ))}
           </div>

       

</div>)
}
export default Card
