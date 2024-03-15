import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { CardUnderImgComponent } from './componentes/card-under-img/card-under-img.component';
import { CardOverImgComponent } from './componentes/card-over-img/card-over-img.component';
import { PostStatsComponent } from './componentes/post-stats/post-stats.component';
import { PostTagComponent } from './componentes/post-tag/post-tag.component';
import { PostMetaComponent } from './componentes/post-meta/post-meta.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { PostComponent } from './componentes/pages/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CardUnderImgComponent,
    CardOverImgComponent,
    PostStatsComponent,
    PostTagComponent,
    PostMetaComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
