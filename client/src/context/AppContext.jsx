import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin,setshowLogin]=useState(false);
    const [token,settoken]=useState(localStorage.getItem('token'))
    const [credit,setcredit]=useState(false)

    const backendUrl=import.meta.env.VITE_BACKEND_URL
     
    const navigate=useNavigate() 

    const loadCreditsData=async ()=>{
        try {
            const {data}=await axios.get(backendUrl+'/api/user/credits',{headers:{token}})

            if(data.success){
               setcredit(data.credits)
               setUser(data.user)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

     const generateImage=async (prompt)=>{
         try {
           const {data}= await axios.post(backendUrl+'/api/image/generate-image',{prompt},{headers:{token}}) 
            
           if(data.success){
            loadCreditsData()
            return data.resultImage;
           }
           else{
            toast.error(data.message)
            loadCreditsData()
            if(data.creditBalance===0){
                 navigate('/buy')
            }
           }


          } catch (error) {
            toast.error(error.message)
         }
     }


    const logout =()=>{
        localStorage.removeItem('token')
        settoken('');
        setUser(null)
    }

    useEffect(()=>{
       if(token){
        loadCreditsData()
       }
    },[token])
 
    const value = {
        user, setUser,showLogin,setshowLogin,backendUrl,token,settoken,credit,setcredit,loadCreditsData,logout,generateImage
    }
    return (
        <AppContext.Provider value={value}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}

export default AppContextProvider