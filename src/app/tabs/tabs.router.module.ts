import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'my-child',
        children: [
          {
            path: '',
            loadChildren: '../my-child/my-child.module#MyChildPageModule'
          }
        ]
      },
      {
        path: 'activity-list',
        children: [
          {
            path: '',
            loadChildren: '../activity-list/activity-list.module#ActivityListPageModule'
          }
        ]
      },
      {
        path: 'conversation',
        children: [
          {
            path: '',
            loadChildren: '../conversation/conversation.module#ConversationPageModule'
          }
        ]
      },
      {
        path: 'details',
        children: [
          {
            path: '',
            loadChildren: '../details/details.module#DetailsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/my-child',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/my-child',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
