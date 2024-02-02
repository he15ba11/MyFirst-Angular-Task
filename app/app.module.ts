import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { ServerComponent } from './components/server/server.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { TableComponent } from './components/table/table.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SliderComponent,
    FormComponent,
    NavHeaderComponent,
    TableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
