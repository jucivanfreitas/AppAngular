// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppComponent
  ],
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync()
  ],

})
export class AppModule { }
