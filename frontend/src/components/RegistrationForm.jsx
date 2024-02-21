import axios from 'axios';
import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error('Паролі не співпадають');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/auth/register', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Помилка реєстрації:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registrationForm">
      <label>
        Ім'я користувача:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Введіть ім'я користувача"
        />
      </label>
      <label>
        Електронна пошта:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Введіть електронну пошту"
        />
      </label>
      <label>
        Пароль:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Введіть пароль"
        />
      </label>
      <label>
        Повторіть пароль:
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Повторіть пароль"
        />
      </label>
      <button type="submit">Зареєструватися</button>
    </form>
  );
};

export default RegisterForm;
