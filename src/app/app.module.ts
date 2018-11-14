import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRouting } from './app-routing.module';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { APP_BASE_HREF, HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { AutoLogoutService } from './shared/services/auto-logout.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    appRouting,
    SharedModule.forRoot()
  ],
  providers: [AutoLogoutService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
