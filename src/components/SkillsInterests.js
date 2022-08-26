import React from 'react'

const SkillsInterests = ({ state, handleChange, nextStep, prevStep }) => {
  return (
    <div className="container flex justify-center mx-auto">
        <div className="block rounded-lg shadow-lg bg-purple-100 text-center w-9/12">

            {/* header */}
            <div className="py-3 px-6 border-b border-purple-600">
                <h1 className='text-3xl'>Skills and Interests</h1>
            </div>

            {/* body */}
            <div className="grid gap-6 mb-6 md:grid-rows-3 mx-5 my-6 text-left">

              
            </div>

            {/* footer */}
            <div className="py-3 px-6 border-t border-purple-600 text-gray-600">
                
                <button className="bg-purple-400 rounded-md text-white px-5 py-2.5 mr-3" onClick={prevStep}>Previous</button>
                <button className="bg-purple-400 rounded-md text-white px-5 py-2.5" onClick={nextStep}>Next </button>
            </div>
        </div>
    </div>
  )
}

export default SkillsInterests