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

const routes: Routes = [

  {path:"Home",component:HomeComponent},
  {path:"About",component:AboutUsComponent}
,  {path:"Contact",component:ContactUsComponent}
,  {path:"privacy",component:PrivacyComponent}
,  {path:"FQA",component:FAQComponent}
,  {path:"cart",component:CartComponent}
,  {path:"shop",component:ShopComponent}
,
 {path:"user",component:UserComponent}
,  {path:"terms",component:TermsComponent}

,  {path:"wishlist",component:WishlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
