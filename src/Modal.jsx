import React from 'react'

const Modal = ({isOpen,onClose,onSave}) => {

    if(!isOpen) return null;
  return (

        <div className='absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur'>
             <div className="relative z-50 m-auto min-h-[250px] min-w-[40%] bg-[#FFEFE2] p-4 rounded-lg">
            <h1 className='text-center font-bold text-3xl text-white animate-blinkColors'>Enter Referee Details</h1>
                 
            <div className="flex justify-end">
              <h1 onClick={onClose} className="self-end text-4xl cursor-pointer hover:bg-red-600 text-red-900 rounded-xl " >x</h1>
            </div>
            <form onSubmit={onSave} className='flex  flex-col justify-center items-center'>

            <label >Name:
            <input type="text" name='name' placeholder='Enter Name' required='ture' className='border-none border-r-4 ' />
            </label>
              <br />
            <label >Email:
            <input type="email" name='email' placeholder='Enter Email' required='ture' />

            </label>
            <br />
            <label >Phone:
            <input type="text" name='phone' placeholder='Phone Number' required='ture' />

            </label>
            <br />
            <label >Message:
            <input type="text" name='message' placeholder='write Message' required='ture' />

            </label>
            
            <button type='submit'  className=' mt-[35px] px-5 py-1 bg-[#1A73E8] text-white items-center rounded-lg'>Send</button>


            </form>
   
            </div>
          

        </div>
     

  )
}

export default Modal