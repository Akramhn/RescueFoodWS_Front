import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BeneficiaireComponent } from './beneficiaire/beneficiaire.component';
import { RedistComponent } from './redist/redist.component';
import { NourritureComponent } from './nourriture/nourriture.component';
import { DonComponent } from './don/don.component';
import { LivreureComponent } from './livreure/livreure.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { RecommandationComponent } from './recommandation/recommandation.component';
import { CollectComponent } from './collect/collect.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    BeneficiaireComponent,
    RedistComponent,
    NourritureComponent,
    DonComponent,
    LivreureComponent,
    LivraisonComponent,
    RecommandationComponent,
    CollectComponent,
    UserComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
