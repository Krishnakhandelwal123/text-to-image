import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion';
import { AppContext } from '../context/AppContext';


const Result = () => {
    
  const [image,setimage]=useState(assets.sample_img_1);
  const [isimageloaded,setisimageloaded]=useState(false);
  const [loading,setloading]=useState(false);
  const [input,setinput]=useState('')
 
   const {generateImage} =useContext(AppContext)


  const onsubmithandler=async(e)=>{
       e.preventDefault()
       setloading(true)
       if(input){
        const image= await generateImage(input);
        if(image){
          setisimageloaded(true)
          setimage(image)
        }
       }
       setloading(false)
  }
  return (
    <motion.form
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    onSubmit={onsubmithandler} className='flex flex-col min-h-[90vh] justify-center items-center'>
    <div>
       <div className='relative'>
         <img className='max-w-sm rounded' src={image} alt="" />
         <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading?'w-full transition-all duration-[10s]':'w-0'}`} /> 
       </div>
       <p className={!loading?'hidden':''}>Loading......</p>
    </div>

{!isimageloaded&&
  <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
         <input onChange={e=>setinput(e.target.value)} value={input} type="text" placeholder='Describe what you want to generate ' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color'/>
         <button className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full' type='submit'>Generate</button>
    </div>}

    {isimageloaded&&<div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
      <p onClick={()=>{
        setisimageloaded(false)
      }} className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
      <a download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer' href={image}>Download</a>
    </div>}
    
    </motion.form>
  )
}

export default Result
