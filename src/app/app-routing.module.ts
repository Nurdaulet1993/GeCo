import { NgModule } from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

import { DefaultComponent } from "./layouts";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'goods', loadChildren: () => import('./goods/goods.module').then(m => m.GoodsModule) },
      { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }
    ]
  },
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
