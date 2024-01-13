
import { useParams } from "react-router-dom";
import {BiStar} from 'react-icons/bi'
import './style/produit.css'
import { useSelector } from "react-redux";
import Header from "./Header";
function Produit() {
const produit=useSelector(st=>st.produit.produit)
let {id}=useParams();
console.log(id)
let pr=produit.find(e=>e.id===id)
return <div className="app">
  <Header/>
  





  <div className="card">
    <img src={require("./image/"+pr.sorce)}className="card-img-top"/>
    <div className="card-body">
    <h2 className="card-title">{pr.des}</h2>
    <h2 className="card-title"><span>Prix:</span>{pr.prix} $</h2>
    <h2 className="card-title"><span>Code:</span>{pr.id}</h2>
    
  <p className="star card-text">
    <span><BiStar/></span><span><BiStar/></span><span><BiStar/></span><span><BiStar/></span><span><BiStar/></span>
  </p>
  </div>
</div>
</div>

    
}
export default Produit