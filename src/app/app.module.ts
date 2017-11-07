import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TiebarNavComponent } from './tiebar-nav/tiebar-nav.component';
import { TiebarHeroComponent } from './tiebar-hero/tiebar-hero.component';
import { TiebarCardcarouselComponent } from './tiebar-cardcarousel/tiebar-cardcarousel.component';
import { TiebarFooterComponent } from './tiebar-footer/tiebar-footer.component';
import { GiftbarBannerComponent } from './giftbar-banner/giftbar-banner.component';
import { RectBannerComponent } from './rect-banner/rect-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    TiebarNavComponent,
    TiebarHeroComponent,
    TiebarCardcarouselComponent,
    TiebarFooterComponent,
    GiftbarBannerComponent,
    RectBannerComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
