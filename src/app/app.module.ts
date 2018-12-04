// IMPORTS -------------------------------------
  import { BrowserModule }              from '@angular/platform-browser';
  import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
  import { NgModule }                   from '@angular/core';
  import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';

  import { AppConfig }                  from './app.config';
  import { AppRoutingModule }           from './app-routing.module';
  import { MaterialModule }             from './material/material.module';

  import { LoaderService }              from './common/services/loader.service';
  import { LoaderInterceptor }          from './common/interceptors/loader.interceptor';
  import { HeaderInterceptor }          from './common/interceptors/header.interceptor';

  import { VideoModule }                from './video/video.module';

  import { AppComponent }               from './app.component';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
    MaterialModule,

    VideoModule
  ],
  providers: [LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      useFactory: (service: LoaderService) => new LoaderInterceptor(service),
      multi: true,
      deps: [LoaderService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
