import React, { useRef } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config/config';

export default function SignUp() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  async function signup(event: React.FormEvent) {
    event.preventDefault();

    const username = usernameRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();

    if (!username || !password) {
      alert('Please fill out both fields.');
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}`, {
        username,
        password,
      });

      if (response.status === 200) {
        alert('You have successfully signed up!');
        usernameRef.current.value = '';
        passwordRef.current.value = '';
      }
    } catch (error) {
      console.error('Sign-up error:', error);
      alert('An error occurred. Please try again.');
    }
  }

  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <div className="w-96 bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Sign Up</h1>
        <form onSubmit={signup}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Username
            </label>
            <input
              ref={usernameRef}
              type="text"
              id="username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
