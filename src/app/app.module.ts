import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeLeftSideComponent } from './home/home-left-side/home-left-side.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { HomeControlSidebarComponent } from './home/home-control-sidebar/home-control-sidebar.component';
import { InfoComponent } from './home/home-content/components/content-info/home-content-info.component';
import { PlayersComponent } from './home/home-content/components/content-players/home-content-players.component';
import { SecurityComponent } from './home/home-content/components/content-security/home-content-security.component';
import { TransactionsComponent } from './home/home-content/components/content-transactions/home-content-transactions.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeLeftSideComponent,
    HomeContentComponent,
    HomeFooterComponent,
    HomeControlSidebarComponent,
    InfoComponent,
    PlayersComponent,
    SecurityComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
