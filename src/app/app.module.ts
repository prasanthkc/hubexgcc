import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { MainbannerComponent } from './modules/mainbanner/mainbanner.component';
import { HomeComponent } from './pages/home/home.component';
import { PromobarComponent } from './modules/promobar/promobar.component';
import { ServicetilesComponent } from './modules/servicetiles/servicetiles.component';
import { SitedataService } from './services/sitedata.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainbannerComponent,
    HomeComponent,
    PromobarComponent,
    ServicetilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SitedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
