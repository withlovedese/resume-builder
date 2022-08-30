import React from 'react'

const Extracurriculars = ({ state, handleChange, nextStep, prevStep }) => {
  return (
    <div className="container flex justify-center mx-auto">
        <div className="block rounded-lg shadow-lg bg-purple-100 text-center w-9/12">

            {/* header */}
            <div className="py-3 px-6 border-b border-purple-600">
                <h1 className='text-3xl'>Extracurricular Activities</h1>
            </div>

            {/* body */}
            <div className="grid gap-6 mb-6 md:grid-rows-2 mx-5 my-6 text-left">

              <div className='grid gap-3 mb-4 md:grid-rows-3 border-b border-b-purple-600'>
                  <div className='grid gap-3 mb-4 md:grid-cols-2'>
                    <div>
                      <label htmlFor="activity1" className='block mb-2 text-sm font-medium text-gray-900'>Position</label>
                      <input type="text" name='activity1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} placeholder={state.activity1}/>
                    </div>
                    
                    <div>
                      <label htmlFor="actInstitutionName1" className='block mb-2 text-sm font-medium text-gray-900'>Institution / Company</label>
                      <input type="text" name='actInstitutionName1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} placeholder={state.actInstitutionName1}/>
                    </div>
                  </div>
                  <div className='grid gap-3 mb-4 md:grid-cols-4'>

                    <div>
                      <label htmlFor="actStartMonth1" className='block mb-2 text-sm font-medium text-gray-900'>Start Month</label>
                      <input type="text" name='actStartMonth1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5'onChange={handleChange} placeholder={state.actStartMonth1}/>
                    </div>
                    <div>
                      <label htmlFor="actStartYear1" className='block mb-2 text-sm font-medium text-gray-900'>Start Year</label>
                      <input type="text" name='actStartYear1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} placeholder={state.actStartYear1}/>
                    </div>
                    <div>
                      <label htmlFor="actEndMonth1" className='block mb-2 text-sm font-medium text-gray-900'>End Month</label>
                      <input type="text" name='actEndMonth1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} placeholder={state.actEndMonth1}/>
                    </div>
                    <div>
                      <label htmlFor="actEndYear1" className='block mb-2 text-sm font-medium text-gray-900'>End Year</label>
                      <input type="text" name='actEndYear1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} placeholder={state.actEndYear1}/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="actDescription1" className='block mb-2 text-sm font-medium text-gray-900'>Description</label>
                    <input type="text" className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} name="actDescription1" placeholder={state.actDescription1}/>
                  </div>
              </div>

              <div className='grid gap-3 mb-4 md:grid-rows-3'>
                  <div className='grid gap-3 mb-4 md:grid-cols-2'>
                    <div>
                      <label htmlFor="activity2" className='block mb-2 text-sm font-medium text-gray-900'>Position</label>
                      <input type="text" name='activity2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} placeholder={state.activity2}/>
                    </div>
                    
                    <div>
                      <label htmlFor="actInstitutionName2" className='block mb-2 text-sm font-medium text-gray-900'>Institution / Company</label>
                      <input type="text" name='actInstitutionName2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} placeholder={state.actInstitutionName2}/>
                    </div>
                  </div>
                  <div className='grid gap-3 mb-4 md:grid-cols-4'>

                    <div>
                      <label htmlFor="actStartMonth2" className='block mb-2 text-sm font-medium text-gray-900'>Start Month</label>
                      <input type="text" name='actStartMonth2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5'onChange={handleChange} placeholder={state.actStartMonth2}/>
                    </div>
                    <div>
                      <label htmlFor="actStartYear2" className='block mb-2 text-sm font-medium text-gray-900'>Start Year</label>
                      <input type="text" name='actStartYear2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} placeholder={state.actStartYear2}/>
                    </div>
                    <div>
                      <label htmlFor="actEndMonth2" className='block mb-2 text-sm font-medium text-gray-900'>End Month</label>
                      <input type="text" name='actEndMonth2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} placeholder={state.actEndMonth2}/>
                    </div>
                    <div>
                      <label htmlFor="actEndYear2" className='block mb-2 text-sm font-medium text-gray-900'>End Year</label>
                      <input type="text" name='actEndYear2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} placeholder={state.actEndYear2}/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="actDescription2" className='block mb-2 text-sm font-medium text-gray-900'>Description</label>
                    <input type="text" className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} name="actDescription2" placeholder={state.actDescription2}/>
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

export default Extracurriculars