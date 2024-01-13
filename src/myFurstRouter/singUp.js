import './style/singupCss.css'
import {  useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Addusrs} from './usersSlice'
function SingUp() {
    const [inputData,setInputData]=useState({
        "id":"",
        "usernam":"",
        "password":"",
        "email":"",
        "adress":""
    })
    const dispatch=useDispatch()
    const nave=useNavigate()
    const handelRejester=(event)=>{
        event.preventDefault()
        dispatch(Addusrs(inputData))
            nave('/')
    }
    return <div className="bod">
    <div className="wrape">
        <div className="sing-in">
            <form   id="frm" onSubmit={handelRejester}>
                <h2>sing up</h2>
                <div className="input-groop">
                    <input type="text"   onChange={e=>setInputData({...inputData,id:e.target.value})}/><label> Id</label>
                </div>
                <div className="input-groop">
                    <input type="text"   onChange={e=>setInputData({...inputData,usernam:e.target.value})}/><label> user name</label>
                </div>
                <div className="input-groop">
                    <input type="password" onChange={e=>setInputData({...inputData,password:+e.target.value})} /><label> password</label>
                </div>
                <div className="input-groop">
                    <input type="email"  onChange={e=>setInputData({...inputData,email:e.target.value})}/><label> Email</label>
                </div>
                <div className="input-groop">
                    <input type="text"   onChange={e=>setInputData({...inputData,adress:e.target.value})}/><label> Adress</label>
                </div>
                <input type="submit" value="Regester" className="butt"/>
            </form>
        </div>

    </div>
    </div>
}
export default SingUp
