import { Link } from "react-router-dom";
import './style/Produits.css'
import { useSelector,useDispatch } from "react-redux";
import Header from "./Header";
import { useEffect } from "react";
import { getDatae } from "./sliceProduit";


function Produits(){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getDatae())
    
    },[dispatch])



    const produits=useSelector(p=>p.produit.produit)
   
    return <div className="app">
        <Header/>

        <h1 className="title">Liste produit</h1>
        <section >
        {
            produits.map((p)=> <div className="cards" key={p.id}>
                <img src={require("./image/"+p.sorce)}  className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title" >{p.des}</h5>

               
                
                <p className="card-text">Ensure that the bikes you're selling meet safety standards and are of good quality
                    . This is important for customer satisfaction and safety.
                </p>
                <Link to={p.id}className="btn readmor">Read more</Link>
                </div>
            </div>
            
            )
            
        }
    
        </section>
        
        
      
        
        
    </div>
}
export default Produits