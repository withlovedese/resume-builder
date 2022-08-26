import React from 'react'

const Work = ({ state, handleChange, nextStep, prevStep }) => {
  return (
    <div className="container flex justify-center mx-auto">
        <div className="block rounded-lg shadow-lg bg-purple-100 text-center w-9/12">

            {/* header */}
            <div className="py-3 px-6 border-b border-purple-600">
                <h1 className='text-3xl'>Work Experience</h1>
            </div>

            {/* body */}
            <div className="grid gap-6 mb-6 md:grid-rows-2 mx-5 my-6 text-left">

              <div className='grid gap-3 mb-4 md:grid-rows-3 border-b border-b-purple-600'>
                  <div className='grid gap-3 mb-4 md:grid-cols-2'>

                    <div>
                      <label htmlFor="position1" className='block mb-2 text-sm font-medium text-gray-900'>Job Position</label>
                      <input type="text" name='position1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.position1}/>

                    </div>
                    
                    <div>
                      <label htmlFor="institutionName1" className='block mb-2 text-sm font-medium text-gray-900'>Institution / Company</label>
                      <input type="text" name='institutionName1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.institutionName1}/>
                    </div>

                    
                  </div>
                  <div className='grid gap-3 mb-4 md:grid-cols-4'>

                    <div>
                      <label htmlFor="posStartMonth1" className='block mb-2 text-sm font-medium text-gray-900'>Start Month</label>
                      <input type="text" name='posStartMonth1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5'onChange={handleChange} value={state.posStartMonth1}/>
                    </div>
                    <div>
                      <label htmlFor="posStartYear1" className='block mb-2 text-sm font-medium text-gray-900'>Start Year</label>
                      <input type="text" name='posStartYear1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.posStartYear1}/>
                    </div>
                    <div>
                      <label htmlFor="posEndMonth1" className='block mb-2 text-sm font-medium text-gray-900'>End Month</label>
                      <input type="text" name='posEndMonth1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.posEndMonth1}/>
                    </div>
                    <div>
                      <label htmlFor="posEndYear1" className='block mb-2 text-sm font-medium text-gray-900'>End Year</label>
                      <input type="text" name='posEndYear1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.posEndYear1}/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="posDescription1" className='block mb-2 text-sm font-medium text-gray-900'>Work Description</label>
                    <input type="text" className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} name="posDescription1"/>
                  </div>
              </div>

              <div className='grid gap-3 mb-4 md:grid-rows-3'>
                  <div className='grid gap-3 mb-4 md:grid-cols-2'>

                    <div>
                      <label htmlFor="position2" className='block mb-2 text-sm font-medium text-gray-900'>Job Position</label>
                      <input type="text" name='position2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.position2}/>

                    </div>
                    
                    <div>
                      <label htmlFor="institutionName2" className='block mb-2 text-sm font-medium text-gray-900'>Institution / Company</label>
                      <input type="text" name='institutionName2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.institutionName2}/>
                    </div>

                    
                  </div>
                  <div className='grid gap-3 mb-4 md:grid-cols-4'>

                    <div>
                      <label htmlFor="posStartMonth2" className='block mb-2 text-sm font-medium text-gray-900'>Start Month</label>
                      <input type="text" name='posStartMonth2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5'onChange={handleChange} value={state.posStartMonth2}/>
                    </div>
                    <div>
                      <label htmlFor="posStartYear2" className='block mb-2 text-sm font-medium text-gray-900'>Start Year</label>
                      <input type="text" name='posStartYear2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.posStartYear2}/>
                    </div>
                    <div>
                      <label htmlFor="posEndMonth2" className='block mb-2 text-sm font-medium text-gray-900'>End Month</label>
                      <input type="text" name='posEndMonth2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.posEndMonth2}/>
                    </div>
                    <div>
                      <label htmlFor="posEndYear2" className='block mb-2 text-sm font-medium text-gray-900'>End Year</label>
                      <input type="text" name='posEndYear2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.posEndYear2}/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="posDescription2" className='block mb-2 text-sm font-medium text-gray-900'>Work Description</label>
                    <input type="text" className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} name="posDescription2"/>
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

export default Work