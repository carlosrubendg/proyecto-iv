import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { ChatComponent } from './components/chat/chat.component';
import { FAQComponent } from './components/faq/faq.component';
import { FormsModule } from '@angular/forms';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RatingComponent } from './components/rating/rating.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tienda', component: ShopComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'carrito', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    ChatComponent,
    FAQComponent,
    ImageSliderComponent,
    ImageGalleryComponent,
    VideoEmbedComponent,
    ShopComponent,
    CartComponent,
    CheckoutComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollOffset: [0, 90],
      scrollPositionRestoration: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }