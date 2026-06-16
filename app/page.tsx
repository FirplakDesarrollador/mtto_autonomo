"use client";

import { useState } from 'react';
import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('userEmail', email);
    }
    setTimeout(() => {
      setIsVerifying(false);
      router.push('/home');
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img 
            src="/logo_2.png" 
            alt="FIRPLAK Logo" 
            className="brand-logo" 
            id="logo-img"
            onError={(e) => {
              e.currentTarget.onerror = null; 
              e.currentTarget.src="/logo_fpk.jpg";
            }}
          />
        </div>
        
        <div className="header-text">
          <h1 className="app-title">App de Mantenimiento Autónomo</h1>
          <p className="app-subtitle">¡Bienvenido!</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="email" 
              className="form-input" 
              placeholder="Email" 
              required 
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <input 
              type="password" 
              className="form-input" 
              placeholder="Password" 
              required 
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button" disabled={isVerifying}>
            {isVerifying ? 'Verificando...' : 'Ingresar'}
          </button>
        </form>

        <div className="footer-links">
          <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
      
      <div className="app-footer">
        <p>&copy; 2026 FIRPLAK S.A.</p>
      </div>
    </div>
  );
}
