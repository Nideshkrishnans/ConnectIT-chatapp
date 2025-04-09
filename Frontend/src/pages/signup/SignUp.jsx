import React, { useState } from 'react';
import GenderCheckbox from './GenderCheckbox.jsx';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.js';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signup } = useSignup();

    const handlecheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
                <h1 className="text-3xl font-semibold text-center text-gray-300 mb-6">
                    SignUp
                    <span className="text-blue-500"> C<span className="text-gray-300">onnect</span>IT</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-gray-200">Full Name</label>
                        <input
                            type="text"
                            placeholder="eg: John Doe"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-gray-200">Username</label>
                        <input
                            type="text"
                            placeholder="eg: johndoe"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-gray-200">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-gray-200">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckbox onCheckBoxChange={handlecheckboxChange} selectedGender={inputs.gender} />

                    <div className="text-sm mt-3">
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Already have an account?
                        </Link>
                    </div>

                    <div className="mt-4">
                        <button
                            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="loading loading-spinner" />
                            ) : (
                                'Sign Up'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
