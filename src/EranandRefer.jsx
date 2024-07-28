import React, { useState } from 'react'
import Modal from './Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";


const EranandRefer = () => {
   
           const[isModalOpen,setIsModalOpen] =useState(false);
           let [loading, setLoading] = useState(false);
           const [userData,setUserData]=useState({name:'',email:'',phone:'',message:''})
           
           
           const openModal= ()=> setIsModalOpen(true)
           const closeModal= ()=> setIsModalOpen(false);


           const handleSave = async(event) => {
            event.preventDefault();
            setLoading(true);
            const formData = new FormData(event.target);
            const userData = {
              name: formData.get('name'),
              email: formData.get('email'),
              phone: formData.get('phone'),
              message: formData.get('message')
            };
             console.log(userData)
            const response = await fetch('https://referral-system-backend-hrf7.onrender.com/api/referral',{
              method: 'POST', // HTTP method
              headers: {
                'Content-Type': 'application/json', // Content type
              },
              body: JSON.stringify(userData), // Sending data as JSON
            });
            console.log(response)
            closeModal();
            if(response.ok)
            {
              toast.success(`Referral Sent to ${userData.email}`,{
                autoClose:5000,
              })
            }
            else{
              toast.error('something wrong',{
                autoClose:2000,
              })
            }
            setLoading(false);
           
          };
           
             
            
          


           
          


  return (
    <>
     <ToastContainer/>
    <div className='w-full h-screen font-serif pt-4'>
    {loading ? (
          <div className='flex justify-center items-center h-full'>
            <ClipLoader size={50} color={"#123abc"} loading={loading} />
          </div>
        ) : (
       
        <div className='w-full h-lvh'>
      <Modal isOpen={isModalOpen} onClose={closeModal} onSave={handleSave}  />
          <header className='flex flex-row justify-around'>
        
            <nav>
              <ul className='flex flex-row space-x-5 items-center'>
               
                <li className='px-5 py-1 bg-blue-700 text-white items-center rounded-lg'>Course</li>
              </ul>
            </nav>
            <nav className=''>
              <ul className='flex space-x-5 items-center'>
                <li>Refer & Eran</li>
                <li>Resources</li>
                <li>About Us</li>
                <li>Login</li>
                <li className='px-5 py-1 bg-blue-700 text-white items-center rounded-lg'>Try for Free</li>
              </ul>
            </nav>
          </header>
            <nav className='w-full h-[65px] flex items-center justify-center mt-10 '>
            <ul className='flex flex-row space-x-10  w-[797px] h-[33px] bg-[#d5e1f1] justify-around items-center rounded-2xl text-black-400'>
              <li className='text-[#1A73E8]'>Refer</li>
              <li>Benafits</li>
              <li>FAQs</li>
              <li>Support</li>
            </ul>
            </nav>

            <section className='w-[1360px] h-[692px] bg-[#EEF5FF] flex flex-row'>
               
               <section className='w-[508px] h-[692px] ml-8'>
               <button className=' mt-[35px] px-5 py-1  text-white items-center rounded-lg
                   animate-blinkColors'  onClick={openModal}>Refer Now</button>
                  <h1 className='text-[88px] font-robot'>Let's Learn <br />
                      & Earn
                  </h1>
                  <h2 className='text-[54px]'>Get a chance to win <br /> up-to <h3 className='text-blue-700'>Rs 15,000</h3></h2>
                  <button className=' mt-[35px] px-5 py-1  text-white items-center rounded-lg
                   animate-blinkColors'  onClick={openModal}>Refer Now</button>
                 
               </section>
               <section className='w-[852px] h-[692px]'>
                 <img src="\public\Anniversary (7) 1.png" alt="" />
               </section>
             
            </section>
            
        
            </div>
      )}
    </div>
        
    </>
  )
}

export default EranandRefer