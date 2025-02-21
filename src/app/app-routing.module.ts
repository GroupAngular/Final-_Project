import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { PrivacyComponent } from './Pages/privacy/privacy.component';
import { FAQComponent } from './Pages/faq/faq.component';
import { CartComponent } from './Pages/cart/cart.component';
import { WishlistComponent } from './Pages/wishlist/wishlist.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { UserComponent } from './Pages/user/user.component';
import { TermsComponent } from './Pages/terms/terms.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { ConfirmationComponent } from './Pages/confirmation/confirmation.component';
import { ShopProductComponent } from './Pages/shop-product/shop-product.component';
import { SingleProductPageComponent } from './Pages/single-product-page/single-product-page.component';

const routes: Routes = [

  {path:"Home",component:HomeComponent},
  {path:"About",component:AboutUsComponent}
,  {path:"Contact",component:ContactUsComponent}
,  {path:"privacy",component:PrivacyComponent}
,  {path:"FQA",component:FAQComponent}
,  {path:"cart",component:CartComponent}
,  {path:"shop",component:ShopComponent}
,  {path:"shopProduct/:idProduct",component:ShopProductComponent,
  runGuardsAndResolvers: 'always', // Ensures guards and resolvers always run

}
,  {path:"single-product-page/:id",component:SingleProductPageComponent}

,  {path:"shopProduct",component:ShopProductComponent}
,{ path: 'checkout', component: CheckoutComponent },
  {path:"user",component:UserComponent}
,  {path:"terms",component:TermsComponent}

,  {path:"wishlist",component:WishlistComponent}
,
{path:"confirmation",component:ConfirmationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
