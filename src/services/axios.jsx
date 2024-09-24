import axios from "axios";
const url=`http://localhost:4000/api/auth`
export const SignUpFunc = async (user)=>{
    try{
        console.log(user)
        return await axios.post(`${url}/signup`,user)
    }catch(error){
        console.log(`error in SignUpFunc :- ${error}`)
    }
}
export const loginfunc = async (user)=>{
    try{
        
        return await axios.post(`${url}/login`,user)
    }catch(error){
        console.log(`error in Loginfunc ${error}`)
    }
}