

import { useEffect, useState,} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Header from './Header';
import { Delet, Modif, sarger } from './usersSlice';
import { getData } from "./usersSlice";
import './style/User.css'

export default function AfficheUsers(){
    const [modifUser,setModifUser]=useState({
       
    })
    
const dispatch=useDispatch()
const {user}=useSelector(state=>state.users)
const {isModif}=useSelector(state=>state.users)


console.log(user)
useEffect(()=>{
    dispatch(getData())

},[dispatch])

const sarge=(id)=>{
   
    let d=user.find(e=>e.id===id);
    setModifUser(d);

    dispatch(sarger())
}
const Modifier=(e)=>{
    e.preventDefault();
    const {Id,usernam,password,email,adress}=document.getElementById('frm');
    let user={
        id:Id.value ,
        usernam:usernam.value ,
        password:password.value,
        email:email.value ,
        adress: adress.value
    }
    
    dispatch(Modif(user))

}


    return <div className='user'>
        <Header/>
        {
            isModif?(
                <form id='frm' onSubmit={(e)=>Modifier(e)} className='container'>
                    <input type="text" id='Id'  defaultValue={modifUser.id} readOnly/>
                    <input type="text" id='usernam' defaultValue={modifUser.usernam} /><br/>
                    <input type="text" id='password'  defaultValue={modifUser.password}/>
                    <input type="text" id='email'  defaultValue={modifUser.email}/>
                    <input type="text" id='adress' defaultValue={modifUser.adress} /><br/>
                    <button type='submit' className='btn  mod'>Modify</button>
                </form>
            ):(<div className=''>
                <h1 style={{textAlign:'center',color:'#386641'}}>
                liste du users 
            </h1>
            <table className='table container'>
            <thead>
                    <tr>
                        <th>ID</th>
                        <th>User nam</th>
                        <th>Password</th>
                        <th>Emil</th>
                        <th>Adress</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((e,i)=>
                        <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.usernam}</td>
                            <td>{e.password}</td>
                            <td>{e.email}</td>
                            <td>{e.adress}</td>
                            <td><button className='btn btn-danger' onClick={()=>dispatch(Delet(e.id))}>X</button >
                            ||<button className='btn btn-primary' onClick={()=>sarge(e.id)}>M</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
           
            )
        }
       
    </div>
}