import {  useState} from "react";
import {  NavLink , useNavigate} from "react-router-dom";
 import "./style/LoginStyle.css"
import { useSelector ,useDispatch} from "react-redux";
import { useEffect } from "react";
import { getData } from "./usersSlice";


function Login(){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getData())

    },[dispatch])

    //get users from store
    const {user}=useSelector(state=>state.users)
    console.log(user)
    
    const nave=useNavigate();
    // create state for controlr message
    const [mesg,setMesg]=useState('')

    //controle button login
    const handelLogin=(e)=>{
        e.preventDefault()
        let {txtusername,txtpassword}=document.getElementById("frm");
        let nom=user.findIndex(e=>e.usernam===txtusername.value)
        let pass=user.findIndex(e=>e.password===+txtpassword.value)
        if(  pass!==-1 && nom!==-1){
            nave('/Accueil')
        }else{
            setMesg("Invalid username or password. Please try again.")
        }
        }
    return <div className="bodye">
    <div className="wraper">
        <div className="sing-in">
            <form  onSubmit={(e)=>handelLogin(e)} id="frm">
                <h2>Login</h2>
                <div className="input-groop">
                    <input type="text"  id="txtusername"/><label> user name</label>
                </div>
                <div className="input-groop">
                <input type="password" id="txtpassword" /><label> password</label>
                </div>
                <div className="remumber">
                    <input type="checkbox" className="form-check-input"/><label>remember me ?</label>
                </div>
                <p className="mesg">{mesg}</p>
                <input type="submit" value="Login" className="button"/>
                <div className="sing-up">
                 <p>D'ont have acount ?<NavLink to="/singUp" >creat a count</NavLink></p>
                </div>
            </form>
        </div>

    </div>
    </div>
   
   
}

export default Login