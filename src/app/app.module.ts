import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {ContactComponent} from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
          { path: '', component: HomeComponent },
          { path: 'articles', component: ArticleComponent },
          { path: 'contact', component: ContactComponent },
      ]),
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      ArticleComponent,
      ContactComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
