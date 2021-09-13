import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { WelcomeBoardComponent } from './welcome-board/welcome-board.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  {
    path: '', component: AccountComponent,
    children: [
      { path: '', redirectTo: 'welcome-board', pathMatch: 'full' },
      { path: 'welcome-board', component: WelcomeBoardComponent },
      // { path: 'organisation', component: OrganizationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
