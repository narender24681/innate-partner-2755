import { REQUEST_STATE,SUCCESS_STATE,ERROR_STATE } from "./actionTypes";

import axios from "axios";


export const getProductscloths=(obj)=>(dispatch)=>{
    dispatch({type:REQUEST_STATE})
    axios.get(" http://localhost:8088/mens",obj).then((res)=>{
dispatch({type:SUCCESS_STATE,payload:res.data})
    }).catch(()=>
        dispatch({type:ERROR_STATE})
    )
}
