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
import { TemplateComponent } from './compartido/formulario/template/template.component';
import { DataComponent } from './compartido/formulario/data/data.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    TemplateComponent,
    DataComponent
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
