import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/0b941793-9528-410c-ae20-2acce3ef5b8c" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#2d88c1]  text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-7 pb-1'>Submit the form below or shoot me an email - sherry.tayyabi@gmailcom</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-#2d88c1 hover:border-#ccd6f6 px-4 py-3 my-8 mx-auto flex items-center hover:text-[#2d88c1]'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact

