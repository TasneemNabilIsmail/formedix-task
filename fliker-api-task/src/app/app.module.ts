import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFlickerComponent } from './search-flicker/search-flicker.component';
import { FlickerCardsListComponent } from './flicker-cards-list/flicker-cards-list.component';
import { FlickerCardItemComponent } from './flicker-cards-list/flicker-card-item/flicker-card-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    AppComponent,
    SearchFlickerComponent,
    FlickerCardsListComponent,
    FlickerCardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
