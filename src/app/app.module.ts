import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {ServersComponent} from "./servers/servers.component";
import {WarningComponent} from "./componets-create-practise/warning-alert/warning-alert.component";
import {SuccessAlertComponent} from "./componets-create-practise/success-alert/success-alert.component";
@NgModule({
  declarations: [
    AppComponent, ServersComponent, WarningComponent, SuccessAlertComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
