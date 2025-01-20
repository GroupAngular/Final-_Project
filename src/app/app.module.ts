import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Pages/home/home.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { CartComponent } from './Pages/cart/cart.component';
import { UserComponent } from './Pages/user/user.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { FAQComponent } from './Pages/faq/faq.component';
import { TermsComponent } from './Pages/terms/terms.component';
import { PrivacyComponent } from './Pages/privacy/privacy.component';
import { WishlistComponent } from './Pages/wishlist/wishlist.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { TeamMemberCardComponent } from './components/cards/team-member-card/team-member-card.component';
import { ProductCardComponent } from './components/cards/product-card/product-card.component';
 // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    UserComponent,
    AboutUsComponent,
    ContactUsComponent,
    FAQComponent,
    TermsComponent,
    PrivacyComponent,
    WishlistComponent,
    CheckoutComponent,
    TeamMemberCardComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,    
    FormsModule, // Add FormsModule to imports
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
