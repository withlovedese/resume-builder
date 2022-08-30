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
                <div>
                  <label htmlFor="skills" className='block mb-2 text-sm font-medium text-gray-900'>Skills</label>
                  <textarea type="text" name='skills' id="large-input" className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 h-16' onChange={handleChange} placeholder={state.skills}/>
                </div>

                <div>
                  <label htmlFor="languages" className='block mb-2 text-sm font-medium text-gray-900'>Languages</label>
                  <textarea type="text" name='languages' id="large-input" className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 h-16' onChange={handleChange} placeholder={state.languages}/>
                </div>

                <div>
                  <label htmlFor="interests" className='block mb-2 text-sm font-medium text-gray-900'>Interests</label>
                  <textarea type="text" name='interests' id="large-input" className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 h-16' onChange={handleChange} placeholder={state.interests}/>
                </div>

              
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