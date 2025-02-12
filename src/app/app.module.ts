import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Pages/home/home.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { CartComponent } from './Pages/cart/cart.component';

import { provideToastr, ToastrModule } from 'ngx-toastr';
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
import { CartService } from './services/cart.service';
import { ConfirmationComponent } from './Pages/confirmation/confirmation.component';
import { CarouselModule } from 'primeng/carousel'; 
import { ButtonModule } from 'primeng/button'; 
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ShopCardsComponent } from './components/cards/shop-cards/shop-cards.component';
import { provideHttpClient } from '@angular/common/http';
import { ShopProductComponent } from './Pages/shop-product/shop-product.component';
import { BGSectionComponent } from './Shared/bg-section/bg-section.component';
import { CarouselComponent } from './Shared/carousel/carousel.component';
import { LatestProductComponent } from './components/latest-product/latest-product.component';
import { TagsComponent } from './components/tags/tags.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RatingComponent } from './Shared/rating/rating.component';
import { ShopProductCardsComponent } from './components/shop-product-cards/shop-product-cards.component';
import { SingleProductPageComponent } from './Pages/single-product-page/single-product-page.component';
import { CardCommentComponent } from './components/card-comment/card-comment.component';
import { FormCommentComponent } from './components/form-comment/form-comment.component';
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
    ProductCardComponent,
    ConfirmationComponent,
    ShopCardsComponent,
    ShopProductComponent,
    BGSectionComponent,
    CarouselComponent,
    LatestProductComponent,
    TagsComponent,
    CategoriesComponent,
    RatingComponent,
    ShopProductCardsComponent,
    SingleProductPageComponent,
    CardCommentComponent,
    FormCommentComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,    
    FormsModule, // Add FormsModule to imports
    ReactiveFormsModule
,
BrowserAnimationsModule, // required animations module
ToastrModule.forRoot(), // ToastrModule added
    CommonModule ,// This imports the currency pipe and other common Angular features

    BrowserAnimationsModule, 
    ButtonModule, 
    CarouselModule, 

  ],
  providers: [CartService ,provideHttpClient()
,
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  quantity: any; 
   // Increase quantity
   increaseQuantity(): void {
    this.quantity++;
  }

  // Decrease quantity
  decreaseQuantity(): void {
      this.quantity--;
    
  }
}
