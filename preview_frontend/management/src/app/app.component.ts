import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  active = '';
  NAV = [
    {
      name: 'Login',
      link: '/login',
      icon: 'log-in'
    },
    {
      name: 'Register',
      link: '/register',
      icon: 'person-circle'
    },
    {
      name: 'Reset Password',
      link: '/reset-password',
      icon: 'balloon'
    },
    {
      name: 'Flexworker',
      link: '/flexworker-overview', //should go to read page eventually
      icon: 'accessibility'
    },
    {
      name: 'Event',
      link: '/event-overview', //should go to read page eventually
      icon: 'bicycle'
    },
    {
      name: 'Customer',
      link: '/customer-list', //should go to read page eventually
      icon: 'business'
    }
  ]
  constructor() {}
}
