import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoOverviewComponent } from './to-do-overview/to-do-overview.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { ToDoService } from './services/to-do.service'

@NgModule({
  declarations: [
    AppComponent,
    ToDoOverviewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  providers: [ToDoService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
