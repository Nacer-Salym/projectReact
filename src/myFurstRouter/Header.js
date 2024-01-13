import { NavLink } from "react-router-dom";
import './style/Header.css'
import { useNavigate } from "react-router-dom";




function Header(){
    const nave =useNavigate();
    const handelLogout=()=>{
        if(window.confirm('Are you sure!!')){
            nave('/')
        }
    }
    

    return<div className="myheader">
     <header>
        <img src={require("./image/bikeLogo.png")} alt="eruuur" width={70} className="rounded-circle"/>
                
        <nav>
            <ul>
                <li><NavLink to="/Accueil">Accueil</NavLink></li>
                <li><NavLink to="/Nous">Qui some nous</NavLink></li>
                <li><NavLink to="/listeProduit">Produits</NavLink></li>
                <li><NavLink to="/affiche"> Users</NavLink></li>
                
            </ul>
        
        </nav>
       
            
        <button className="btn btn-success logOut" onClick={()=>handelLogout()} >Log out</button>
      
    </header>
             {/* <img src={require('./image/bachPik.jpeg')}  className='back'/> */}
</div>
   
}
export default Header