import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';

import { MenuComponent } from './components/menu/menu.component';
import { ControlsComponent } from './components/controls/controls.component';
import { SearchComponent } from './components/controls/search.component';
import { SourcesComponent } from './components/controls/sources.component';

import { FeedStoreService } from './services/feed-store.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
  //  { path: 'savedFilter/:id', component: HeroDetailComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, ControlsComponent, SearchComponent, SourcesComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    TabMenuModule,
    InputTextModule,
    MultiSelectModule
  ],
  providers: [FeedStoreService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
