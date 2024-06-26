import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MouseComponent } from './mouse/mouse.component';
import { KeybordsComponent } from './keybords/keybords.component';

const routes: Routes = [
  {path: 'mouse', component: MouseComponent},
  {path: 'keybords', component: KeybordsComponent},
  {path: '', redirectTo: 'mouse', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
