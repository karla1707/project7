import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./shared/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./shared/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/auth/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'change-password/:token',
    loadChildren: () => import('./pages/auth/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'create-flexworker',
    loadChildren: () => import('./pages/flexworker/create-flexworker/create-flexworker.module').then( m => m.CreateFlexworkerPageModule)
  },
  {
    path: 'create-flexworker/:id',
    loadChildren: () => import('./pages/flexworker/create-flexworker/create-flexworker.module').then( m => m.CreateFlexworkerPageModule)
  },
  {
    path: 'create-event', loadChildren: () => import('./pages/event/create-event/create-event.module').then( m => m.CreateEventPageModule)
  },
  {
    path: 'create-event/:id',
    loadChildren: () => import('./pages/event/create-event/create-event.module').then( m => m.CreateEventPageModule)
  },
  {
    path: 'customer-list',
    loadChildren: () => import('./pages/customer/customer-list/customer-list.module').then( m => m.CustomerListPageModule)
  },
  {
    path: 'create-customer',
    loadChildren: () => import('./pages/customer/create-customer/create-customer.module').then( m => m.CreateCustomerPageModule)
  },
  {
    path: 'edit-customer/:id',
    loadChildren: () => import('./pages/customer/edit-customer/edit-customer.module').then( m => m.EditCustomerPageModule)
  },
  {
    path: 'event-overview',
    loadChildren: () => import('./pages/event/event-overview/event-overview.module').then( m => m.EventOverviewPageModule)
  },
  {
    path: 'event-details/:id',
    loadChildren: () => import('./pages/event/event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'shift/invite-flexworkers/:shift-id',
    loadChildren: () => import('./pages/invite-flexworkers/invite-flexworkers.module').then(m => m.InviteFlexworkersPageModule)
  },
  {
    path: 'add-function',
    loadChildren: () => import('./shared/components/add-function/add-function.module').then(m => m.AddFunctionModule)
  },
  {
    path: 'add-shift',
    loadChildren: () => import('./shared/components/add-shift/add-shift.module').then(m => m.AddShiftPageModule)
  },
  {
    path: 'flexworker-overview',
    loadChildren: () => import('./pages/flexworker/flexworker-overview/flexworker-overview.module').then(m => m.FlexworkerOverviewPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
