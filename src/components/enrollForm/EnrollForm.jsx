import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

export default function EnrollForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    age: '',
  })

  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required'
    if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Enter 10-digit mobile number'
    const age = parseInt(formData.age)
    if (!age || age < 3 || age > 12) newErrors.age = 'Age must be between 3 and 12'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log('Form Submitted:', formData)
      // submit logic here
    }
  }

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
        <div className="bg-white rounded-xl w-full max-w-md p-6 animate-slideIn shadow-2xl relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
            onClick={props.onclose} // You must define setShowPopup in the parent
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

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700"
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
            animation: slideIn 0.4s ease-out;
          }
        `}
      </style>
    </>
  )
}
