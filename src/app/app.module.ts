import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ImageComponent } from './components/sobre/image-profile/image.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { ContatosIconsComponent } from './components/contatos/contatos-icons/contatos-icons.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { TecnologiasIconsComponent } from './components/tecnologias/tecnologias-icons/tecnologias-icons.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    SobreComponent,
    ImageComponent,
    ContatosComponent,
    ContatosIconsComponent,
    TecnologiasComponent,
    TecnologiasIconsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
