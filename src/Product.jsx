import "./Product.css";
import Price from "./Price";

function Product({ title }) {
   let oldPrices = ["12,494", "11,384", "1,355", "599"];
   let newPrices = ["3,848", "398", "38,737", "373"];

    return (
        <div className="Product" >
          <h4>{title}</h4>
            <p>Description</p>    
            <Price />  
        </div>
    );
  }     



export default Product;    