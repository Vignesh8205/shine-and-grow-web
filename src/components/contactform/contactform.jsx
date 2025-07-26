import React, { useState } from 'react';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    interest: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.age) {
      newErrors.age = 'Child’s age is required';
    } else if (formData.age < 3 || formData.age > 12) {
      newErrors.age = 'Age must be between 3 and 12';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select a learning interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };
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
          console.log('Success:', data);
          alert('Form submitted successfully!');
        })
        .catch(err => {
          console.error('Error!', err.message);
          alert('Submission failed.');
        });
    }
  };




  //bg-Teal

  return (
    <div className="bg-gradient-to-br from-Teal-100 to-blue-100 p-8 rounded-2xl shadow-xl max-w-xl mx-auto my-10" >
      <h2 className="text-3xl font-bold text-center text-Teal-600 mb-6">
        Start Your Child’s Joyful Learning Journey!
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div className="relative">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`peer w-full border-b-2 border-gray-300 bg-transparent py-3 px-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-Teal-500`}
            placeholder="Your Full Name"
          />
          <label
            htmlFor="name"
            className="absolute left-2 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-600"
          >
            Your Full Name
          </label>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`peer w-full border-b-2 border-gray-300 bg-transparent py-3 px-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-Teal-500`}
            placeholder="Your Email Address"
          />
          <label
            htmlFor="email"
            className="absolute left-2 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-Teal-600"
          >
            Your Email Address
          </label>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="relative">
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`peer w-full border-b-2 border-gray-300 bg-transparent py-3 px-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-pink-500`}
            placeholder="Phone Number"
          />
          <label
            htmlFor="phone"
            className="absolute left-2 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-600"
          >
            Phone Number
          </label>
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Age */}
        <div className="relative">
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            className={`peer w-full border-b-2 border-gray-300 bg-transparent py-3 px-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-pink-500`}
            placeholder="Child’s Age"
          />
          <label
            htmlFor="age"
            className="absolute left-2 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-600"
          >
            Child’s Age (3–12)
          </label>
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
        </div>

        {/* Interest */}
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
          {errors.interest && <p className="text-red-500 text-sm mt-1">{errors.interest}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-Teal text-white font-semibold hover:bg-Teal-600 transition duration-300 shadow-md"
        >
          Start Learning
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
