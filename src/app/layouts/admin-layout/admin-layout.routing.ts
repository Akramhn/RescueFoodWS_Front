import { Routes } from '@angular/router';


import { BeneficiaireComponent } from 'app/beneficiaire/beneficiaire.component';
import { RedistComponent } from 'app/redist/redist.component';
import { NourritureComponent } from 'app/nourriture/nourriture.component';
import { DonComponent } from 'app/don/don.component';
import { LivraisonComponent } from 'app/livraison/livraison.component';
import { LivreureComponent } from 'app/livreure/livreure.component';
import { RecommandationComponent } from 'app/recommandation/recommandation.component';
import { CollectComponent } from 'app/collect/collect.component';
import { UserComponent } from 'app/user/user.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'beneficiaire-list',     component: BeneficiaireComponent },
    { path: 'redist-list',     component: RedistComponent },
    { path: 'nourriture-list',     component: NourritureComponent },
    { path: 'don-list',     component: DonComponent },
    { path: 'livraison-list',     component: LivraisonComponent },
    { path: 'livreure-list',     component: LivreureComponent },
    { path: 'Recom-list',     component: RecommandationComponent },
    { path: 'collect-list',     component: CollectComponent },
    { path: 'user-list',     component: UserComponent },


];
