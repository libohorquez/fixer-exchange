import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/currency',
    pathMatch: 'full'
  },
  {
    path: 'currency',
    loadChildren: () => import('./currency/currency.module').then(mod => mod.CurrencyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
