import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Componente de Navegación (Menú Principal)
const Navbar = () => (
  <nav className="navbar">
    <div className="logo">ModaLocalMX 👗</div>
    <ul className="nav-links">
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/nosotros">¿Quiénes Somos?</Link></li>
      <li><Link to="/politicas">Políticas</Link></li>
      <li><Link to="/admin">Acceso Asesor</Link></li>
    </ul>
  </nav>
);

// Páginas del Proyecto
const Home = () => (
  <div className="page">
    <h1>Bienvenidos a ModaLocalMX</h1>
    <p>Conectando el talento de productores locales con el mundo digital[cite: 52].</p>
    <div className="hero-placeholder">
      <img src="https://via.placeholder.com/800x400" alt="Logo de sitio" />
    </div>
  </div>
);

const Nosotros = () => (
  <div className="page">
    <h2>Nuestra Identidad</h2>
    <section>
      <h3>Misión</h3>
      <p>Impulsar la economía local brindando una plataforma digital a los productores de moda mexicana[cite: 52].</p>
    </section>
    <section>
      <h3>Visión</h3>
      <p>Ser el referente principal para el consumo de moda local y sostenible en la región para 2027.</p>
    </section>
    <section>
      <h3>Ubicación Física</h3>
      <p>Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI), Guadalajara, Jalisco[cite: 1, 119].</p>
    </section>
  </div>
);

const Politicas = () => (
  <div className="page">
    <h2>Políticas de Calidad</h2>
    <ul>
      <li>Garantizar que cada producto listado sea de origen local.</li>
      <li>Mantener una interfaz intuitiva para productores y consumidores[cite: 52].</li>
      <li>Seguridad en la gestión de datos de usuario.</li>
    </ul>
  </div>
);

// Sección solicitada: Datos de Administrador para la Asesora
const AdminAccess = () => (
  <div className="page admin-card">
    <h2>Panel de Administración (Simulado)</h2>
    <p>Acceso exclusivo para la docente **Rosalía Iñiguez Barajas** [cite: 15, 128] y el equipo.</p>
    <table className="admin-table">
      <thead>
        <tr>
          <th>Rol</th>
          <th>Usuario (Email)</th>
          <th>Clave Temporal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Asesora</td>
          <td>rosalia.iniguez@docente.udg.mx</td>
          <td><code>Proyecto4_2026</code></td>
        </tr>
        <tr>
          <td>Equipo (General)</td>
          <td>equipo4@alumnos.udg.mx</td>
          <td><code>ModaLocal2026</code></td>
        </tr>
      </tbody>
    </table>
  </div>
);

function App() {
  return (
    <Router basename="/nombre-de-tu-repo"> {/* Cambia esto por el nombre de tu repo */}
      <div className="App">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="/admin" element={<AdminAccess />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2026 ModaLocalMX - Integrantes: Mercedes, Fernando, Víctor y Carlos[cite: 13, 131].</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;