import { INavData } from '@coreui/angular';
//import { AuthGuard } from '../../_auth/auth.guard';
import { Router } from '@angular/router';
export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
     text: '',
    },
  },

  {
    name: 'Components',
    title: true,
  },
  {
    name: 'Plant 1',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Room 1',
        url: '/base/accordion',
      },
      {
        name: 'Room 2',
        url: '/base/breadcrumbs',
      },
      {
        name: 'Room 3',
        url: '/base/cards',
      },
    ],
  },
  {
    name: 'Plant 2',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Room 1',
        url: '/buttons/buttons',
      },
      {
        name: 'Room 2',
        url: '/buttons/button-groups',
      },
      {
        name: 'Room 3',
        url: '/buttons/dropdowns',
      },
    ],
  },

  {
    title: true,
    name: 'Services',
  },

  // {
  //   name: 'Register User',
  //   url: '/register',
  //   iconComponent: { name: 'cil-star' },
  // },

  {
    name: 'Export Excel',
    url: '/account/app-excel',
    iconComponent: { name: 'cil-task' },
  },
  {
    title: true,
    name: 'Support',
  },
  
  {
    name: 'Raise Complaint',
    url: '/support/app-raise-complaint',
    iconComponent: { name: 'cil-star' },
  },
  {
    name: 'Settings',
    url: '/account',
    iconComponent: { name: 'cil-settings' },
    children: [
      {
        name: 'Device Settings',
        url: '/account/app-link-devices',
      },
      {
        name: 'Management Settings',
        url: '/account/app-enable',
      },
      {
        name: 'Admin Settings',
        url: '/account/app-admin-password',
      },
    ]
  },
  
  {
    title: true,
    name: 'Account',
  },
  {
    name: 'Register User',
    url: '/account/app-register',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Register Organisation',
    url: '/account/app-reg-organisation',
    iconComponent: { name: 'cil-star' },
  },
  {
    name: 'Register RU',
    url: '/account/app-reg-ru',
    iconComponent: { name: 'cil-star' },
  },
  {
    name: 'Register CS',
    url: '/account/app-register-cs',
    iconComponent: { name: 'cil-star' }, 
   },
   
  {
    name: 'Logout',
    url: '/account/app-logout',
    iconComponent: { name: 'cil-chevron-left' },
    
  },
  
  // {
  //   name: 'Logout',
  //   url: '/buttons/buttons',
  //   iconComponent: { name: 'cil-star' },
  // },
];
