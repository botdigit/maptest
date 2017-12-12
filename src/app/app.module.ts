import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule} from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule, AgmCoreModule.forRoot({apiKey: 'AIzaSyAZblewke2Uf2pxweli4ig0P7guzufSg4Y'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
