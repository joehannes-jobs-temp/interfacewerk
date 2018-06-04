import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { TabMenuModule } from 'primeng/tabmenu';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';

import { MenuComponent } from './components/menu/menu.component';

import { FeedStoreService } from './services/feed-store.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
  //  { path: 'savedFilter/:id', component: HeroDetailComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    TabMenuModule
  ],
  providers: [FeedStoreService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
