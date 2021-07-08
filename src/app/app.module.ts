import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {ServersComponent} from "./servers/servers.component";
import {WarningComponent} from "./componets-create-practise/warning-alert/warning-alert.component";
import {SuccessAlertComponent} from "./componets-create-practise/success-alert/success-alert.component";
import { DataBindingComponent } from './componets-create-practise/data-binding/data-binding.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';

@NgModule({
  declarations: [
    AppComponent, ServersComponent, WarningComponent, SuccessAlertComponent, DataBindingComponent, CustomEventsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
