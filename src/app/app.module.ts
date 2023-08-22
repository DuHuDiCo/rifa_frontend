import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FinishedComponent } from './pages/home/finished/finished.component';
import { FormsModule } from '@angular/forms';
import { TratamientoDatosComponent } from './components/tratamiento-datos/tratamiento-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoadingComponent,
    FinishedComponent,
    TratamientoDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
