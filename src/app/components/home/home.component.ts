import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mensajeEnviado = false;

  enviarMensaje(event: Event) {
    event.preventDefault(); 
    const form = event.target as HTMLFormElement;

    // Verificamos si el formulario cumple con todos los atributos 'required'
    if (form.checkValidity()) {
      // Todo está lleno, mostramos el éxito
      this.mensajeEnviado = true;
      form.reset();

      setTimeout(() => {
        this.mensajeEnviado = false;
      }, 4000);
    } else {
      // Si está vacío, forzamos al navegador a mostrar las alertas rojas nativas
      form.reportValidity();
    }
  }
}