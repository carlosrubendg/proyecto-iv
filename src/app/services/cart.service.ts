import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Producto {
  nombre: string;
  precio: number;
  imagen: string;
  cantidad?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Producto[] = [];
  private _cart = new BehaviorSubject<Producto[]>([]);

  // Observable que los componentes pueden escuchar
  cart$ = this._cart.asObservable();

  agregarAlCarrito(producto: Producto) {
    // Si el producto ya existe, aumentamos la cantidad
    const index = this.cartItems.findIndex(p => p.nombre === producto.nombre);
    if (index !== -1) {
      this.cartItems[index].cantidad = (this.cartItems[index].cantidad || 1) + 1;
    } else {
      this.cartItems.push({ ...producto, cantidad: 1 });
    }
    this._cart.next([...this.cartItems]);
  }

  eliminarDelCarrito(nombre: string) {
    this.cartItems = this.cartItems.filter(p => p.nombre !== nombre);
    this._cart.next([...this.cartItems]);
  }

  obtenerTotal() {
    return this.cartItems.reduce((acc, p) => acc + (p.precio * (p.cantidad || 1)), 0);
  }

  limpiarCarrito() {
    this.cartItems = [];
    this._cart.next([]);
  }

  obtenerConteo() {
    return this.cartItems.reduce((acc, p) => acc + (p.cantidad || 0), 0);
  }
}