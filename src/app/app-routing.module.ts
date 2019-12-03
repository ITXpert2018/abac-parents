import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
  { path: 'activity-category/:categoryId', loadChildren: './activity-category/activity-category.module#ActivityCategoryPageModule', canActivate: [AuthGuard] },
  { path: 'activity-details/:activityId', loadChildren: './activity-details/activity-details.module#ActivityDetailsPageModule', canActivate: [AuthGuard] },
  { path: 'activity-list', loadChildren: './activity-list/activity-list.module#ActivityListPageModule', canActivate: [AuthGuard] },
  { path: 'add-card', loadChildren: './add-card/add-card.module#AddCardPageModule', canActivate: [AuthGuard] },
   { path: 'child', loadChildren: './child/child.module#ChildPageModule', canActivate: [AuthGuard] },
 // { path: 'child', loadChildren: './child/child.module#ChildPageModule'},
  { path: 'child-add/:returnUrl', loadChildren: './child-add/child-add.module#ChildAddPageModule', canActivate: [AuthGuard] },
  { path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationPageModule', canActivate: [AuthGuard] },
  { path: 'conversation', loadChildren: './conversation/conversation.module#ConversationPageModule', canActivate: [AuthGuard] },
  { path: 'credit-card', loadChildren: './credit-card/credit-card.module#CreditCardPageModule', canActivate: [AuthGuard] },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule', canActivate: [AuthGuard] },
  { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryPageModule', canActivate: [AuthGuard] },
  { path: 'menu-modal', loadChildren: './menu-modal/menu-modal.module#MenuModalPageModule', canActivate: [AuthGuard] },
  { path: 'my-child', loadChildren: './my-child/my-child.module#MyChildPageModule', canActivate: [AuthGuard] },
  { path: 'name-modal', loadChildren: './name-modal/name-modal.module#NameModalPageModule' },
  { path: 'nominas', loadChildren: './nominas/nominas.module#NominasPageModule', canActivate: [AuthGuard] },
  { path: 'password-modal', loadChildren: './password-modal/password-modal.module#PasswordModalPageModule' },
  { path: 'phone-modal', loadChildren: './phone-modal/phone-modal.module#PhoneModalPageModule' },
  { path: 'reports', loadChildren: './reports/reports.module#ReportsPageModule', canActivate: [AuthGuard] },
  { path: 'thankyou-order', loadChildren: './thankyou-order/thankyou-order.module#ThankyouOrderPageModule' },
  { path: 'password', loadChildren: './password/password.module#PasswordPageModule' },
  { path: 'child-modify/:childId', loadChildren: './child-modify/child-modify.module#ChildModifyPageModule', canActivate: [AuthGuard] },
  { path: 'child-selector', loadChildren: './child-selector/child-selector.module#ChildSelectorPageModule' },
  { path: 'activiy-detail-report/:activityId', loadChildren: './activiy-detail-report/activiy-detail-report.module#ActiviyDetailReportPageModule', canActivate: [AuthGuard]},
  { path: 'activiy-detail-photo/:activityId', loadChildren: './activiy-detail-photo/activiy-detail-photo.module#ActiviyDetailPhotoPageModule' , canActivate: [AuthGuard]},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
