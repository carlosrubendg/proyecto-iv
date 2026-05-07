import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  usuarioLogueado: string | null = null;

  // Controla qué formulario se muestra
  isLoginMode = true;

  // Variables para Login
  usuario = '';
  password = '';

  // Variables para Registro
  registroNombre = '';
  registroCorreo = '';
  registroUsuario = '';
  registroPassword = '';

  // Mensaje de feedback
  mensajeExito = '';

  login() {
    if (this.usuario && this.password) {
      // Simulamos el inicio de sesión
      this.usuarioLogueado = this.usuario;
      this.usuario = '';
      this.password = '';
    }
  }

  logout() {
    this.usuarioLogueado = null;
  }

  toggleFormulario() {
    // Alterna entre modo login y modo registro
    this.isLoginMode = !this.isLoginMode;
    this.mensajeExito = ''; // Limpiamos mensajes previos
  }

  registrar() {
    if (this.registroNombre && this.registroCorreo && this.registroUsuario && this.registroPassword) {

      // Simulamos la creación de la cuenta
      this.mensajeExito = '¡Cuenta creada con éxito! Redirigiendo al login...';

      // Después de 2 segundos, lo regresamos al login automáticamente
      setTimeout(() => {
        this.isLoginMode = true;
        this.mensajeExito = '';

        // Autocompletamos el nombre de usuario para facilitarle el login
        this.usuario = this.registroUsuario;

        // Limpiamos el formulario de registro
        this.registroNombre = '';
        this.registroCorreo = '';
        this.registroUsuario = '';
        this.registroPassword = '';
      }, 2500);
    }
  }
}