import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MainComponent } from './components/template/main/main.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/view/home/home.component';
import { UserComponent } from './components/view/user/user.component';
import { HttpClientModule } from "@angular/common/http";
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/forms/form/form.component';
import { CreateComponent } from './components/forms/create/create.component';
import { EditComponent } from './components/forms/edit/edit.component';
import { DeleteComponent } from './components/forms/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './components/view/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    TableComponent,
    FormComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    MessageComponent
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
