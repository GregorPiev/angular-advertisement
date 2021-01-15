import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './description/description.component';
import { TypeComponent } from './type/type.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CardAddComponent } from './card/card-add/card-add.component';
import { CardDetailComponent } from './card/card-detail/card-detail.component';
import { CardSummaryComponent } from './card/card-summary/card-summary.component';
import { CardService } from './shared/card.service';

const appRouters: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: '*', redirectTo: 'HomeComponent' },
  { path: 'card/:id', component: CardDetailComponent},
  { path: 'add' , component: CardAddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DescriptionComponent,
    TypeComponent,
    SearchComponent,
    FooterComponent,
    CardAddComponent,
    CardDetailComponent,
    CardSummaryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouters),
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
