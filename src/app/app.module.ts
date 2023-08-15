import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IvanComponent } from './ivan/ivan.component';
import { VeronicaComponent } from './veronica/veronica.component';
import { LucasComponent } from './lucas/lucas.component';
import { RossComponent } from './ross/ross.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const appRoutes:Routes = [
  {path:'ivan',component:IvanComponent},
  {path:'veronica',component:VeronicaComponent},
  {path:'lucas',component:LucasComponent},
  {path:'ross',component:RossComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    IvanComponent,
    VeronicaComponent,
    LucasComponent,
    RossComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
