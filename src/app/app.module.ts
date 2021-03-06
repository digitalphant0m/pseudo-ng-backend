import { AppService } from "./app.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { FakeBackendService } from "./fake-backend.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
