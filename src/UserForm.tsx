import React, { useState } from 'react'
import { UserFormSchema, FormErrors, userFormSchema } from './types/userform'



const UserForm = () => {
    const [formData, setFormData] = useState<UserFormSchema>({
        name: '',
        age: 0,
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        gender: "Male",
    })

    const [error, setError] = useState<FormErrors>({})

    const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: name === "age" ? (value ? Number(value) : 0) : value,
        })
        setError((prev) => ({ ...prev, [name]: undefined }))
    }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = userFormSchema.safeParse(formData);
        if(!result.success){
            setError(result.error.formErrors.fieldErrors)
            
        }else{
            setError({});
        }
    }

    return (
        <>
            <form onSubmit={onSubmitHandler} className="max-w-lg mx-auto bg-gray-100 p-8 rounded-xl shadow-lg border border-gray-300 space-y-5">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Create Your Account</h2>

                <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={changeInputHandler}
                        className="w-full mt-2 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none shadow-md transition-all"
                        placeholder="Enter your full name"
                    />
                    {error.name && <p className="text-red-500 text-xs">{error.name[0]}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={changeInputHandler}
                        className="w-full mt-2 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none shadow-md transition-all"
                        placeholder="Enter your email"
                    />
                    {error.email && <p className="text-red-500 text-xs">{error.email[0]}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="age" className="block text-gray-700 text-sm font-medium">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={changeInputHandler}
                            className="w-full mt-2 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none shadow-md transition-all"
                            placeholder="Age"
                        />
                        {error.age && <p className="text-red-500 text-xs">{error.age[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-medium">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={changeInputHandler}
                            className="w-full mt-2 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none shadow-md transition-all"
                            placeholder="Phone Number"
                        />
                        {error.phone && <p className="text-red-500 text-xs">{error.phone[0]}</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-700 text-sm font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={changeInputHandler}
                        className="w-full mt-2 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none shadow-md transition-all"
                        placeholder="Enter your password"
                    />
                    {error.password && <p className="text-red-500 text-xs">{error.password[0]}</p>}
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={changeInputHandler}
                        className="w-full mt-2 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none shadow-md transition-all"
                        placeholder="Confirm your password"
                    />
                    {error.confirmPassword && <p className="text-red-500 text-xs">{error.confirmPassword[0]}</p>}
                </div>

                <div>
                    <label htmlFor="gender" className="block text-gray-700 text-sm font-medium">Gender</label>
                    <select
                        name="gender"
                        id="gender"
                        value={formData.gender}
                        onChange={changeInputHandler}
                        className="w-full mt-2 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none shadow-md transition-all"
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {error.gender && <p className="text-red-500 text-xs">{error.gender[0]}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full py-3 text-lg font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                    Sign Up
                </button>

                <p className="text-sm text-center text-gray-600 mt-4">
                    Already have an account? <a href="#" className="text-blue-500 hover:underline">Log in</a>
                </p>
            </form>



        </>
    )
}

export default UserForm