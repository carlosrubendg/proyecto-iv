import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { Producto } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // Definimos las propiedades que el HTML está buscando
  items$: Observable<Producto[]>;
  total: number = 0;

  constructor(private cartService: CartService) {
    // Inicializamos el observable
    this.items$ = this.cartService.cart$;
  }

  ngOnInit() {
    // Nos suscribimos para actualizar el total automáticamente
    this.items$.subscribe(() => {
      this.total = this.cartService.obtenerTotal();
    });
  }

  eliminar(nombre: string) {
    this.cartService.eliminarDelCarrito(nombre);
  }

  finalizarCompra() {
    alert('¡Gracias por tu compra! Tu pedido está en camino.');
    this.cartService.limpiarCarrito();
  }
}