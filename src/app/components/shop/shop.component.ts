import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  productos = [
    {
      id: 1,
      nombre: 'iPhone 13',
      precio: 7499.00,
      imagen: 'assets/iphone13.jpg'
    },
    {
      id: 2,
      nombre: 'Samsung Galaxy S23',
      precio: 12499.00,
      imagen: 'assets/samsung-s23.png'
    },
    {
      id: 3,
      nombre: 'AirPods Pro',
      precio: 2499.00,
      imagen: 'assets/airpods-pro.jpeg'
    }
  ];

  // Variables para controlar el feedback visual
  mostrarMensaje = false;
  productoAgregado = '';

  // Inyectamos el servicio del carrito
  constructor(private cartService: CartService) {}

  agregarAlCarrito(producto: any) {
    this.cartService.agregarAlCarrito(producto);

    this.productoAgregado = producto.nombre;
    this.mostrarMensaje = true;

    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 2500);
  }
}