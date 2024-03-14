import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { CardMediumComponent } from './componentes/card-medium/card-medium.component';
import { CardOverImgComponent } from './componentes/card-over-img/card-over-img.component';
import { CardMinComponent } from './componentes/card-min/card-min.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CardMediumComponent,
    CardOverImgComponent,
    CardMinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
