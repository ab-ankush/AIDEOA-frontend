import axios from "axios";
const url=`http://localhost:4000/api/auth`
export const SignUpFunc = async (user)=>{
    try{
        console.log("formdata",user)
        return await axios.post(`${url}/signup`,user)
    }catch(error){
      return error.response
    }
}
export const loginfunc = async (user)=>{
    try{
        
        return await axios.post(`${url}/login`,user,{
            withCredentials:true
        })
    }catch(error){
        console.log(`error in Loginfunc ${error}`)
    }
}