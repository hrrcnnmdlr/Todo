import axios from 'axios';
import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Помилка авторизації:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Електронна пошта"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Пароль"
      />
      <button type="submit">Увійти</button>
    </form>
  );
};

export default LoginForm;
