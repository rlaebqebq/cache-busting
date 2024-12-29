import React from "react";
import {useNavigate} from "react-router-dom";

const RootPage =()=> {
  const navigate = useNavigate();

  const handleLocation = ( to:string )=>{
    navigate(`/${to}`);
  }
  return <>
    <button type='button' onClick={()=>handleLocation('a')}>goto A page</button>
    <button type='button' onClick={()=>handleLocation('b')}>goto B page</button>
  </>
}
export default RootPage