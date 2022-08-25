import React from 'react'

const Education = ({ state, handleChange, nextStep, prevStep }) => {
  return (
    <div className="container flex justify-center mx-auto">
        <div className="block rounded-lg shadow-lg bg-purple-100 text-center w-9/12">

            {/* header */}
            <div className="py-3 px-6 border-b border-purple-600">
                <h1 className='text-3xl'>Education</h1>
            </div>

            {/* body */}
            <div class="grid gap-6 mb-6 md:grid-rows-2 mx-5 my-6 text-left">

                <div className='grid gap-3 mb-4 md:grid-rows-3 border-b border-b-purple-600'>
                  <div>
                    <label htmlFor="universityName" className='block mb-2 text-sm font-medium text-gray-900'>University Name</label>
                    <input type="text" name='universityName' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.universityName}/>
                  </div>
                  <div className='grid gap-3 mb-4 md:grid-cols-4'>

                    <div>
                      <label htmlFor="uniStartMonth" className='block mb-2 text-sm font-medium text-gray-900'>Start Month</label>
                      <input type="text" name='uniStartMonth' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5'onChange={handleChange} value={state.uniStartMonth}/>
                    </div>
                    <div>
                      <label htmlFor="uniStartYear" className='block mb-2 text-sm font-medium text-gray-900'>Start Year</label>
                      <input type="text" name='uniStartYear' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.uniStartYear}/>
                    </div>
                    <div>
                      <label htmlFor="uniEndMonth" className='block mb-2 text-sm font-medium text-gray-900'>End Month</label>
                      <input type="text" name='uniEndMonth' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.uniEndMonth}/>
                    </div>
                    <div>
                      <label htmlFor="uniEndYear" className='block mb-2 text-sm font-medium text-gray-900'>End Year</label>
                      <input type="text" name='uniEndYear' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.uniEndYear}/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="relCoursework" className='block mb-2 text-sm font-medium text-gray-900'>Relevant Coursework</label>
                    <input type="text" className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} placeholder={`${state.relCoursework}`} name="relCoursework"/>
                  </div>
                </div>

                <div className='grid gap-3 mb-4 md:grid-rows-3'>
                  <div>
                    <label htmlFor="highschoolName" className='block mb-2 text-sm font-medium text-gray-900'>Highschool Name</label>
                    <input type="text" name='highschoolName' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.highschoolName}/>
                  </div>
                  <div className='grid gap-3 mb-4 md:grid-cols-4'>

                    <div>
                      <label htmlFor="highStartMonth" className='block mb-2 text-sm font-medium text-gray-900'>Start Month</label>
                      <input type="text" name='highStartMonth' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.highStartMonth}/>
                    </div>
                    <div>
                      <label htmlFor="highStartYear" className='block mb-2 text-sm font-medium text-gray-900'>Start Year</label>
                      <input type="text" name='highStartYear' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.highStartYear}/>
                    </div>
                    <div>
                      <label htmlFor="highEndMonth" className='block mb-2 text-sm font-medium text-gray-900'>End Month</label>
                      <input type="text" name='highEndMonth' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.highEndMonth}/>
                    </div>
                    <div>
                      <label htmlFor="highEndYear" className='block mb-2 text-sm font-medium text-gray-900'>End Year</label>
                      <input type="text" name='highEndYear' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.highEndYear}/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="relAwards" className='block mb-2 text-sm font-medium text-gray-900'>Relevant Awards</label>
                    <input type="text" className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} placeholder={`${state.relAwards}`} name="relAwards"/>
                  </div>
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

export default Education