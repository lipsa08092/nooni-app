import React from 'react'

function LoginComponents() {
    return (
        <div className='flex relative min-h-screen w-full justify-center'>
            <div className=' w-full  opacity-60'>
                <img class= "w-full h-96" src="https://www.decorilla.com/online-decorating/wp-content/uploads/2023/02/Interior-design-trends-2023-imagined-by-Decorilla-1024x585.jpg" alt="" />
            </div>
            <div className='flex justify-center items-center w-[90%] h-[80%] top-20 absolute mt-10 container-xl bg-white  shadow-xl p-8 space-y-6'>
                <form className=' space-y-6'>
                    <div className='text-center text-2xl font-semibold'>
                        <h2 className=''>Log In</h2>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-800 mb-2'>Name *</label>
                        <input type="text" className='w-[600px] mt-1 px-4 py-2 border border-gray-400 rounded focus:ring-blue-300'  />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-800 mb-2'>Email *</label>
                        <input type="email" className='w-full mt-1 px-4 py-2 border border-gray-400 rounded focus:ring-blue-300'  />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-800 mb-2'>Password *</label>
                        <input type="password" className='w-full mt-1 px-4 py-2 border border-gray-400 rounded focus:ring-blue-300'  />
                    </div>
                    <div>
                        <button  className="bg-black w-full text-white px-4 py-3 rounded hover:bg-blue-800 transition">
                        Log In
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginComponents;
