
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Header'
import Acceuil from './Acceuil'
import Produits from "./Produits"
import Nous from './QuiSomenous'
import Produit from './Produit'
import Login from "./login"
import SingUp from './singUp.js'
import AfficheUsers from './AfficheUsers'
import Err from './pageErreur'

function App(){
      return  <div>
       <BrowserRouter>
    
   
          <Routes> 
           <Route path="/" element={<Login/>}/> 
            <Route path="/Accueil" element={<Acceuil/>}/>
          <Route path="/Nous" element={<Nous/>}/>
             <Route path="/listeProduit">
                 <Route index element={<Produits/>}/>
                  <Route path=":id" element={<Produit/>}/>
            </Route>
              <Route path="/header" element={<Header/>}/>
              {/*<Route path="/header" element={<Header/>}/> */}
             <Route path="/produits" element={<Produits/>}/>
             <Route path="/singUp"element={<SingUp/>}/>
             <Route path="/affiche"element={<AfficheUsers/>}/>
             <Route path="*"element={<Err/>}/>
            </Routes> 
           
           </BrowserRouter> 
  </div> 
    }  
export default App