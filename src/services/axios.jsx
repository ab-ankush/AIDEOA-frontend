import axios from "axios";
export const SignUpFunc = async (user)=>{
    try{
        return axios.post(`${url}/signup`,{user})
    }catch(error){
        console.log(`error in SignUpFunc :- ${error}`)
    }
}