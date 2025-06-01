"use client"
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (type: 'sign-in' | 'sign-up') => {
    const { data, error } =
      type === 'sign-in'
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password })

    if (error) {
      alert(error.message)
    } else {
      alert('Success!')
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-2 p-2 border"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-2 p-2 border"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => handleLogin('sign-in')}
        className="bg-blue-500 text-white w-full py-2 mb-2"
      >
        Log In
      </button>
      <button
        onClick={() => handleLogin('sign-up')}
        className="bg-green-500 text-white w-full py-2"
      >
        Sign Up
      </button>
    </div>
  )
}
