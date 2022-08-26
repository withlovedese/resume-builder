import React from 'react'

const Profile = ({ state, handleChange, nextStep }) => {
  return (
    <div className="container flex justify-center mx-auto">
        <div className="block rounded-lg shadow-lg bg-purple-100 text-center w-9/12">

            {/* header */}
            <div className="py-3 px-6 border-b border-purple-600">
                <h1 className='text-3xl'>Profile information</h1>
            </div>

            {/* body */}
            <div className="grid gap-6 mb-6 md:grid-cols-2 mx-5 my-6 text-left">

                <div>
                  <label htmlFor="firstName" className='block mb-2 text-sm font-medium text-gray-900'>First Name</label>
                  <input type="text" name='firstName' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.firstName}/>
                </div>

                <div>
                  <label htmlFor="lastName" className='block mb-2 text-sm font-medium text-gray-900'>Last Name</label>
                  <input type="text" name='lastName' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.lastName}/>
                </div>

                <div>
                  <label htmlFor="address" className='block mb-2 text-sm font-medium text-gray-900'>Address</label>
                  <input type="text" name='address' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.address}/>
                </div>

                <div>
                  <label htmlFor="phoneNumber" className='block mb-2 text-sm font-medium text-gray-900'>Phone Number</label>
                  <input type="text" name='phoneNumber' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.phoneNumber}/>
                </div>

                <div>
                  <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900'>Email</label>
                  <input type="text" name='email' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.email}/>
                </div>

                <div>
                  <label htmlFor="website" className='block mb-2 text-sm font-medium text-gray-900'>Personal Website</label>
                  <input type="text" name='personalWebsite' className='bg-purple-200 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5' onChange={handleChange} value={state.personalWebsite}/>
                </div>
              
            </div>

            {/* footer */}
            <div className="py-3 px-6 border-t border-purple-600 text-gray-600">
                <button className="bg-purple-400 rounded-md text-white px-5 py-2.5" onClick={nextStep}>Next </button>
            </div>
        </div>
    </div>
  )
}

export default Profile