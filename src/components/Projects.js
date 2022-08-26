import React from 'react'

const Projects = ({ state, handleChange, nextStep, prevStep }) => {
  return (
    <div className="container flex justify-center mx-auto">
        <div className="block rounded-lg shadow-lg bg-purple-100 text-center w-9/12">

            {/* header */}
            <div className="py-3 px-6 border-b border-purple-600">
                <h1 className='text-3xl'>Projects</h1>
            </div>

            {/* body */}
            <div className="grid gap-6 mb-6 md:grid-rows-2 mx-5 my-6 text-left">

              <div className='grid gap-3 mb-4 md:grid-rows-3 border-b border-b-purple-600'>
                  <div className='grid gap-3 mb-4 md:grid-cols-2'>

                    <div>
                      <label htmlFor="projectName1" className='block mb-2 text-sm font-medium text-gray-900'>Project Name</label>
                      <input type="text" name='projectName1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projectName1}/>

                    </div>
                    
                    <div>
                      <label htmlFor="techUsed1" className='block mb-2 text-sm font-medium text-gray-900'>Technologies Used</label>
                      <input type="text" name='techUsed1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.techUsed1}/>

                    </div>

                    
                  </div>
                  <div className='grid gap-3 mb-4 md:grid-cols-4'>

                    <div>
                      <label htmlFor="projStartMonth1" className='block mb-2 text-sm font-medium text-gray-900'>Start Month</label>
                      <input type="text" name='projStartMonth1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5'onChange={handleChange} value={state.projStartMonth1}/>
                    </div>
                    <div>
                      <label htmlFor="projStartYear1" className='block mb-2 text-sm font-medium text-gray-900'>Start Year</label>
                      <input type="text" name='projStartYear1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projStartYear1}/>
                    </div>
                    <div>
                      <label htmlFor="projEndMonth1" className='block mb-2 text-sm font-medium text-gray-900'>End Month</label>
                      <input type="text" name='projEndMonth1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projEndMonth1}/>
                    </div>
                    <div>
                      <label htmlFor="projEndYear1" className='block mb-2 text-sm font-medium text-gray-900'>End Year</label>
                      <input type="text" name='projEndYear1' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projEndYear1}/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projDescription1" className='block mb-2 text-sm font-medium text-gray-900'>Project Description</label>
                    <input type="text" className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} name="projDescription1"/>
                  </div>
              </div>

              <div className='grid gap-3 mb-4 md:grid-rows-3 border-b border-b-purple-600'>
                  <div className='grid gap-3 mb-4 md:grid-cols-2'>

                    <div>
                      <label htmlFor="projectName2" className='block mb-2 text-sm font-medium text-gray-900'>Project Name</label>
                      <input type="text" name='projectName2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projectName2}/>
                    </div>
                    
                    <div>
                      <label htmlFor="techUsed2" className='block mb-2 text-sm font-medium text-gray-900'>Technologies Used</label>
                      <input type="text" name='techUsed2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.techUsed2}/>

                    </div>

                    
                  </div>
                  <div className='grid gap-3 mb-4 md:grid-cols-4'>
                    <div>
                      <label htmlFor="projStartMonth2" className='block mb-2 text-sm font-medium text-gray-900'>Start Month</label>
                      <input type="text" name='projStartMonth2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5'onChange={handleChange} value={state.projStartMonth2}/>
                    </div>
                    <div>
                      <label htmlFor="projStartYear2" className='block mb-2 text-sm font-medium text-gray-900'>Start Year</label>
                      <input type="text" name='projStartYear2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projStartYear2}/>
                    </div>
                    <div>
                      <label htmlFor="projEndMonth2" className='block mb-2 text-sm font-medium text-gray-900'>End Month</label>
                      <input type="text" name='projEndMonth2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projEndMonth2}/>
                    </div>
                    <div>
                      <label htmlFor="projEndYear2" className='block mb-2 text-sm font-medium text-gray-900'>End Year</label>
                      <input type="text" name='projEndYear2' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projEndYear2}/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projDescription2" className='block mb-2 text-sm font-medium text-gray-900'>Project Description</label>
                    <input type="text" className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} name="projDescription2"/>
                  </div>
              </div>

              <div className='grid gap-3 mb-4 md:grid-rows-3 border-b border-b-purple-600'>
                  <div className='grid gap-3 mb-4 md:grid-cols-2'>

                    <div>
                      <label htmlFor="projectName3" className='block mb-2 text-sm font-medium text-gray-900'>Project Name</label>
                      <input type="text" name='projectName3' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projectName3}/>

                    </div>
                    
                    <div>
                      <label htmlFor="techUsed3" className='block mb-2 text-sm font-medium text-gray-900'>Technologies Used</label>
                      <input type="text" name='techUsed3' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.techUsed3}/>

                    </div>

                    
                  </div>
                  <div className='grid gap-3 mb-4 md:grid-cols-4'>

                    <div>
                      <label htmlFor="projStartMonth3" className='block mb-2 text-sm font-medium text-gray-900'>Start Month</label>
                      <input type="text" name='projStartMonth3' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5'onChange={handleChange} value={state.projStartMonth3}/>
                    </div>
                    <div>
                      <label htmlFor="projStartYear3" className='block mb-2 text-sm font-medium text-gray-900'>Start Year</label>
                      <input type="text" name='projStartYear3' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projStartYear3}/>
                    </div>
                    <div>
                      <label htmlFor="projEndMonth3" className='block mb-2 text-sm font-medium text-gray-900'>End Month</label>
                      <input type="text" name='projEndMonth3' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projEndMonth3}/>
                    </div>
                    <div>
                      <label htmlFor="projEndYear3" className='block mb-2 text-sm font-medium text-gray-900'>End Year</label>
                      <input type="text" name='projEndYear3' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projEndYear3}/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projDescription3" className='block mb-2 text-sm font-medium text-gray-900'>Project Description</label>
                    <input type="text" className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} name="projDescription3"/>
                  </div>
              </div>

              <div className='grid gap-3 mb-4 md:grid-rows-3'>
                  <div className='grid gap-3 mb-4 md:grid-cols-2'>

                    <div>
                      <label htmlFor="projectName4" className='block mb-2 text-sm font-medium text-gray-900'>Project Name</label>
                      <input type="text" name='projectName4' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projectName4}/>

                    </div>
                    
                    <div>
                      <label htmlFor="techUsed4" className='block mb-2 text-sm font-medium text-gray-900'>Technologies Used</label>
                      <input type="text" name='techUsed4' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.techUsed4}/>

                    </div>

                    
                  </div>
                  <div className='grid gap-3 mb-4 md:grid-cols-4'>

                    <div>
                      <label htmlFor="projStartMonth4" className='block mb-2 text-sm font-medium text-gray-900'>Start Month</label>
                      <input type="text" name='projStartMonth4' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5'onChange={handleChange} value={state.projStartMonth4}/>
                    </div>
                    <div>
                      <label htmlFor="projStartYear4" className='block mb-2 text-sm font-medium text-gray-900'>Start Year</label>
                      <input type="text" name='projStartYear4' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projStartYear4}/>
                    </div>
                    <div>
                      <label htmlFor="projEndMonth4" className='block mb-2 text-sm font-medium text-gray-900'>End Month</label>
                      <input type="text" name='projEndMonth4' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projEndMonth4}/>
                    </div>
                    <div>
                      <label htmlFor="projEndYear4" className='block mb-2 text-sm font-medium text-gray-900'>End Year</label>
                      <input type="text" name='projEndYear4' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.projEndYear4}/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projDescription4" className='block mb-2 text-sm font-medium text-gray-900'>Project Description</label>
                    <input type="text" className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} name="projDescription4"/>
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

export default Projects