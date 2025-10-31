import React from 'react'
import { useState } from 'react';

function LoginComponents() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && password) {
            setLoggedIn(true);
            
        } else {
            alert("Please fill all the fields");
    }
};
if (loggedIn) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-[400px] text-center">
                <h2 className="text-3xl font-bold mb-4">Welcome, {name}!</h2>
                <p className="text-gray-700 mb-6">Password: ******</p>
                <button onClick={() => setLoggedIn(false)}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">Log Out</button>
            </div>
        </div>
        );
    }


    return (
        <div className='flex relative min-h-screen w-full justify-center'>
            <div className=' w-full  opacity-60'>
                <img class= "w-full h-96" src="https://www.decorilla.com/online-decorating/wp-content/uploads/2023/02/Interior-design-trends-2023-imagined-by-Decorilla-1024x585.jpg" alt="" />
            </div>
            <div className='flex justify-center items-center w-[90%] h-[80%] top-20 absolute mt-10 container-xl bg-white  shadow-xl p-8 space-y-6'>
                <form onSubmit={handleSubmit} className=' space-y-6'>
                    <div className='text-center text-2xl font-semibold'>
                        <h2 className=''>Log In</h2>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-800 mb-2'>Username or Email address *</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-[600px] mt-1 px-4 py-2 border border-gray-400 rounded focus:ring-blue-300'  />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-800 mb-2'>Password *</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full mt-1 px-4 py-2 border border-gray-400 rounded focus:ring-blue-300'  />
                    </div>
                    <div>
                        <button  type='submit' className="bg-black w-full text-white px-4 py-3 rounded hover:bg-blue-800 transition">
                        Log In
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginComponents;
