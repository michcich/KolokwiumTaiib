import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { MouseComponent } from './mouse/mouse.component';
import { MouseRowComponent } from './mouse-row/mouse-row.component';
import { HttpClientModule } from '@angular/common/http';
import { KeybordsComponent } from './keybords/keybords.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MouseComponent,
    MouseRowComponent,
    KeybordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

