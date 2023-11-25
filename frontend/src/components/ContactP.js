import React from 'react'

const ContactP = () => {
  return (
    <div className='w-full bg-[#121212] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid'>
            <h1 className='text-3xl text-[#f0f0f0] font-tanker text-center space-y-4 p-6 tracking-widest'>Contact Us</h1>
            <form className='flex flex-col font-tanker w-30'>
                <input type='text' placeholder='Your Name' name='user-name' required className='p-4 bg-transparent border-[#c9c9c9] border-2 border-b-0 text-white placeholder:text-white outline-none tracking-widest hover:bg-[#c9c9c9] hover:text-black hover:placeholder:text-black'/>
                <input type='email' placeholder='Your Email' name='user-email' required className='p-4 bg-transparent border-[#c9c9c9] border-2 border-b-0 text-white placeholder:text-white outline-none tracking-widest hover:bg-[#c9c9c9] hover:text-black hover:placeholder:text-black'/>
                <textarea name='message' cols='30' rows='5' placeholder='Message' className='p-4 bg-transparent border-[#c9c9c9] border-2 border-b-0 text-white placeholder:text-white outline-none tracking-widest hover:bg-[#c9c9c9] hover:text-black hover:placeholder:text-black'></textarea>
                <button type='submit' className='text-white p-4 border-[#c9c9c9] border-2 border-{#c9c9c9} border-tracking-widest hover:bg-[#c9c9c9] hover:text-black hover:placeholder:text-black'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactP