import React from 'react';
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

const AdminAccess = () => (
  <div className="container section-padding">
    <div className="admin-card-container">
      <h2 className="section-title">Gestión de Usuarios Administrativos</h2>
      <p className="admin-intro">Panel habilitado para la docente y los integrantes del equipo Scrum de ModaLocalMX.</p>
      <div className="table-responsive">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Rol / Integrante</th>
              <th>Usuario de Acceso</th>
              <th>Permisos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Asesora:</strong> Rosalía Iñiguez</td>
              <td><code>docente_proyectiv@udg.mx</code></td>
              <td>Super Admin</td>
            </tr>
            <tr>
              <td><strong>P.O:</strong> Mercedes Ballesteros</td>
              <td><code>mercedes.ballesteros@alumnos.udg.mx</code></td>
              <td>Gestor Backlog</td>
            </tr>
            <tr>
              <td><strong>S.M:</strong> Fernando Ávalos</td>
              <td><code>fernando.avalos@alumnos.udg.mx</code></td>
              <td>Facilitador</td>
            </tr>
            <tr>
              <td><strong>Dev:</strong> Victor de la Cruz</td>
              <td><code>victor.cruz@alumnos.udg.mx</code></td>
              <td>Desarrollador</td>
            </tr>
            <tr>
              <td><strong>Dev:</strong> Carlos Díaz</td>
              <td><code>carlos.diaz@alumnos.udg.mx</code></td>
              <td>Desarrollador</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router basename="/proyecto-iv">
      <div className="App">
        <Navbar />
        <main>
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
            <p className="footer-names">Mercedes Ballesteros | Fernando Ávalos | Victor de la Cruz | Carlos Díaz</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;