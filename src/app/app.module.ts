import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';

// Componentes
import { HeaderComponent } from './compartido/header/header.component';
import { FooterComponent } from './compartido/footer/footer.component';
import { BodyComponent } from './compartido/body/body.component';
import { HomeComponent } from './compartido/home/home.component';
import { ManitasComponent } from './compartido/body/manitas/manitas.component';
import { FontaneriaComponent } from './compartido/body/fontaneria/fontaneria.component';
import { ElectricidadComponent } from './compartido/body/electricidad/electricidad.component';
import { GasComponent } from './compartido/body/gas/gas.component';
import { ReformasComponent } from './compartido/body/reformas/reformas.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    ManitasComponent,
    FontaneriaComponent,
    ElectricidadComponent,
    GasComponent,
    ReformasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
