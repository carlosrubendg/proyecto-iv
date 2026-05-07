import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  total: number = 0;
  pagoExitoso: boolean = false;
  numeroPedido: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.total = this.cartService.obtenerTotal();
  }

  procesarPago(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (form.checkValidity()) {
      // Simulamos la creación de un número de pedido aleatorio
      this.numeroPedido = Math.floor(Math.random() * 10000) + 1000;
      this.pagoExitoso = true;
      
      // Limpiamos el carrito en nuestro servicio
      this.cartService.limpiarCarrito();

      // Redirigimos al inicio después de 3 segundos
      setTimeout(() => {
        this.pagoExitoso = false;
        this.router.navigate(['/']);
      }, 3500);
    } else {
      form.reportValidity();
    }
  }
}