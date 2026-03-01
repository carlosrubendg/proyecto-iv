import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-container">
      <div className="logo-brand">
        <div className="logo-text">
          <span className="main-title">ModaLocalMX</span>
          <span className="sub-title">Proyecto IV</span>
        </div>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/politicas">Calidad</Link></li>
        <li><Link to="/admin" className="btn-admin">Acceso</Link></li>
      </ul>
    </div>
  </nav>
);

const Home = () => (
  <header className="hero">
    <div className="hero-content">
      <h1>Impulsando el Talento Local</h1>
      <p>La plataforma digital diseñada para conectar a los productores de moda mexicana con el mercado moderno.</p>
      <div className="hero-buttons">
        <Link to="/nosotros" className="btn-primary">Conoce nuestro plan</Link>
      </div>
    </div>
  </header>
);

const Nosotros = () => (
  <div className="container section-padding">
    <h2 className="section-title">Nuestra Identidad</h2>
    <div className="grid-cards">
      <div className="card">
        <h3>Misión</h3>
        <p>Impulsar la economía local brindando una plataforma digital eficiente a los productores de moda mexicana para su profesionalización.</p>
      </div>
      <div className="card">
        <h3>Visión</h3>
        <p>Ser el referente principal para el consumo de moda local y sostenible en la región para el año 2027.</p>
      </div>
    </div>
  </div>
);

const Politicas = () => (
  <div className="container section-padding">
    <h2 className="section-title">Compromiso de Calidad</h2>
    <div className="policy-list">
      <div className="policy-item">
        <strong>01. Autenticidad Local:</strong> Garantizamos que cada producto listado sea de origen y manufactura nacional.
      </div>
      <div className="policy-item">
        <strong>02. Experiencia de Usuario:</strong> Mantenemos una interfaz intuitiva tanto para productores como para consumidores.
      </div>
      <div className="policy-item">
        <strong>03. Seguridad de Datos:</strong> Implementamos protocolos de protección para la gestión segura de información.
      </div>
    </div>
  </div>
);

// Rediseño de Acceso como Formulario de Login
const AdminAccess = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Acceso Administrativo</h2>
        <p className="login-subtitle">Inicie sesión para gestionar el Product Backlog</p>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Correo electrónico</label>
            <input type="email" placeholder="ejemplo@alumnos.udg.mx" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="********" />
          </div>
          <button type="submit" className="btn-login">Entrar</button>
        </form>
        <div className="admin-help">
          <p><strong>Nota para la evaluación:</strong></p>
          <p>Docente: <code>docente_proyectiv@udg.mx</code></p>
          <p>Clave: <code>Proyecto4_2026</code></p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router basename="/proyecto-iv">
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="/admin" element={<AdminAccess />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <p>© 2026 ModaLocalMX | Universidad de Guadalajara</p>
            <p className="footer-names">
              Mercedes Ballesteros | Fernando Ávalos | Victor de la Cruz | Carlos Díaz
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;