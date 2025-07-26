import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import EnrolledSuccessMessage from '../popups/succesmessage'

export default function EnrollPopup(props) {
    const [showPopup, setShowPopup] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        age: '',
        interest: '' // <-- added
    })
    const [errors, setErrors] = useState({})
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true)
        }, props.timeout) // show after 5 sec

        return () => clearTimeout(timer)
    }, [])

    const validate = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.includes('@')) newErrors.email = 'Valid email required'
        if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Enter 10-digit mobile number'
        const age = parseInt(formData.age)
        if (!age || age < 3 || age > 12) newErrors.age = 'Age must be between 3 and 12'
        if (!formData.interest) newErrors.interest = 'Please select a learning interest'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

                .then(res => res.json())
                .then(data => {

                    setShowSuccess(true);
                    setFormData({
                        name: '',
                        email: '',
                        mobile: '',
                        age: '',
                        interest: '' 
                    })

                })
                .catch(err => {
                    console.error('Error!', err.message);
                    alert('Submission failed.');
                });

        }
    }


    if (!showPopup) return null

    return (
        <>
            <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
                <div className="bg-white rounded-xl w-full max-w-md p-6 animate-slideIn shadow-2xl relative">
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-black"
                        onClick={() => setShowPopup(false)}
                    >
                        <IoMdClose size={24} />
                    </button>
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Enroll Form</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="mobile"
                                placeholder="Mobile Number"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                        </div>
                        <div>
                            <input
                                type="number"
                                name="age"
                                placeholder="Age (3 - 12)"
                                value={formData.age}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                        </div>

                        <div className="relative">
                            <select
                                name="interest"
                                id="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 px-2 text-gray-700 focus:outline-none focus:border-pink-500"
                            >
                                <option value="">Select Learning Interest</option>
                                <option value="Occupational Therapy">Occupational Therapy</option>
                                <option value="Speech Therapy">Speech Therapy</option>
                                <option value="Educational Therapy">Educational Therapy</option>
                                <option value="Sensory Integration">Sensory Integration</option>
                            </select>
                            <label
                                htmlFor="interest"
                                className="absolute left-2 -top-4 text-sm text-pink-600"
                            >
                                Learning Interest
                            </label>
                            {errors.interest && <p className="text-red-500 text-sm">{errors.interest}</p>}
                        </div>


                        <button
                            type="submit"
                            className="w-full bg-Teal text-white py-2 rounded-lg hover:bg-emerald-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <style>
                {`
          @keyframes slideIn {
            0% {
              transform: translateY(-20px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slideIn {
            animation: slideIn 1s ease-out;
          }
        `}
            </style>

            <EnrolledSuccessMessage show={showSuccess} onClose={() => setShowSuccess(false)} />
        </>
    )
}
