import React from 'react'
import { MdOutlineDownloading } from 'react-icons/md'

const Confirm = ({ prevStep, createAndDownloadPdf}) => {
  return (
    <div className="container flex justify-center mx-auto">
        <div className="block rounded-lg shadow-lg bg-purple-100 text-center w-9/12">

            {/* body */}
            <div className="mb-6 mx-5 my-6 p-24">
                
                <div className='text-3xl'>
                    <p>...and we're done! Click below to generate your resume!</p>
                </div>


              
            </div>

            {/* footer */}
            <div className="py-3 px-6 border-t border-purple-600 text-gray-600 flex justify-center">
                
                <button className="bg-purple-400 rounded-md text-white px-5 py-2.5 mr-3" onClick={prevStep}>Previous</button>

                <button className="bg-purple-400 rounded-md text-white px-5 py-2.5 flex justify-center align-middle" onClick={createAndDownloadPdf}>
                    <p className='mr-2'>Download PDF</p>
                     <MdOutlineDownloading className='text-2xl'></MdOutlineDownloading> 
                </button>

                
            </div>
        </div>
    </div>
  )
}

export default Confirm