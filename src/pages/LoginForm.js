import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import "./admin.css";

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    if (loginError) setLoginError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!loginForm.email.trim() || !loginForm.password.trim()) {
      setLoginError("Email e senha são obrigatórios");
      return;
    }

    setLoginLoading(true);
    setLoginError("");

    try {
      await signInWithEmailAndPassword(auth, loginForm.email.trim(), loginForm.password);
      setLoginForm({ email: "", password: "" });
    } catch (error) {
      let errorMessage = "Erro no login";
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = "Usuário não encontrado";
          break;
        case 'auth/wrong-password':
          errorMessage = "Senha incorreta";
          break;
        case 'auth/invalid-email':
          errorMessage = "Email inválido";
          break;
        case 'auth/too-many-requests':
          errorMessage = "Muitas tentativas. Tente novamente mais tarde";
          break;
        default:
          errorMessage = `Erro: ${error.message}`;
      }
      setLoginError(errorMessage);
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">🔐 Login do Administrador</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={loginForm.email}
              onChange={handleChange}
              className="form-input"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Senha:</label>
            <input
              type="password"
              name="password"
              value={loginForm.password}
              onChange={handleChange}
              className="form-input"
              placeholder="••••••••"
              required
            />
          </div>

          {loginError && (
            <div className="alert alert-error">
              ❌ {loginError}
            </div>
          )}

          <button
            type="submit"
            disabled={loginLoading}
            className="btn-primary login-btn"
          >
            {loginLoading ? '🔄 Entrando...' : '🔑 Entrar'}
          </button>
        </form>

        <div className="login-help">
          
        </div>
      </div>
    </div>
  );
};

export default LoginForm;