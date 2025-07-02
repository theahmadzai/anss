import React from 'react'
import { useForm } from 'react-hook-form'

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    window.open(`/.netlify/functions/subscribe?email=${data.email}`, '_blank')
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm w-full space-y-4"
      noValidate
    >
      <div>
        <input
          type="email"
          placeholder="example@mail.com"
          {...register('email', {
            required: 'Please type your email.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please type a valid email.'
            }
          })}
          className={`w-full px-4 py-2 rounded-md border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-[#27458d]`}
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="bg-[#27458d] text-white py-2 px-4 rounded-md hover:bg-[#1d3876] transition"
        >
          Subscribe
        </button>
      </div>
    </form>
  )
}

export default Subscribe
