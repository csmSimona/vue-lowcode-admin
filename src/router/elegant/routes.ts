/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { GeneratedRoute } from '@elegant-router/types';

export const generatedRoutes: GeneratedRoute[] = [
  {
    name: '403',
    path: '/403',
    component: 'layout.blank$view.403',
    meta: {
      title: '403',
      i18nKey: 'route.403',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '404',
    path: '/404',
    component: 'layout.blank$view.404',
    meta: {
      title: '404',
      i18nKey: 'route.404',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '500',
    path: '/500',
    component: 'layout.blank$view.500',
    meta: {
      title: '500',
      i18nKey: 'route.500',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'cockpit-manage',
    path: '/cockpit-manage',
    component: 'layout.base',
    meta: {
      title: 'cockpit-manage',
      icon: 'carbon:cloud-service-management',
      order: 6,
      roles: ['R_ADMIN'],
      i18nKey: 'route.cockpit-manage'
    },
    children: [
      {
        name: 'cockpit-manage_list',
        path: '/cockpit-manage/list',
        component: 'view.cockpit-manage_list',
        meta: {
          title: 'cockpit-manage_list',
          order: 5,
          icon: '',
          i18nKey: 'route.cockpit-manage_list'
        }
      }
    ]
  },
  {
    name: 'designer',
    path: '/designer',
    component: 'layout.blank$view.designer',
    meta: {
      title: 'designer',
      hideInMenu: true,
      i18nKey: 'route.designer'
    }
  },
  {
    name: 'home',
    path: '/home',
    component: 'layout.base$view.home',
    meta: {
      title: 'home',
      i18nKey: 'route.home',
      icon: 'mdi:monitor-dashboard',
      order: 1
    }
  },
  {
    name: 'login',
    path: '/login/:module(pwd-login|code-login|register|reset-pwd|bind-wechat)?',
    component: 'layout.blank$view.login',
    props: true,
    meta: {
      title: 'login',
      i18nKey: 'route.login',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'manage',
    path: '/manage',
    component: 'layout.base',
    meta: {
      title: 'manage',
      i18nKey: 'route.manage',
      icon: 'carbon:cloud-service-management',
      order: 4,
      roles: ['R_ADMIN']
    },
    children: [
      {
        name: 'manage_menu',
        path: '/manage/menu',
        component: 'view.manage_menu',
        meta: {
          title: 'manage_menu',
          i18nKey: 'route.manage_menu',
          icon: 'material-symbols:route',
          order: 3,
          roles: ['R_ADMIN'],
          keepAlive: true
        }
      },
      {
        name: 'manage_role',
        path: '/manage/role',
        component: 'view.manage_role',
        meta: {
          title: 'manage_role',
          i18nKey: 'route.manage_role',
          icon: 'carbon:user-role',
          order: 2,
          roles: ['R_SUPER']
        }
      },
      {
        name: 'manage_user',
        path: '/manage/user',
        component: 'view.manage_user',
        meta: {
          title: 'manage_user',
          i18nKey: 'route.manage_user',
          icon: 'ic:round-manage-accounts',
          order: 1,
          roles: ['R_ADMIN']
        }
      },
      {
        name: 'manage_user-detail',
        path: '/manage/user-detail/:id',
        component: 'view.manage_user-detail',
        props: true,
        meta: {
          title: 'manage_user-detail',
          i18nKey: 'route.manage_user-detail',
          hideInMenu: true,
          roles: ['R_ADMIN'],
          activeMenu: 'manage_user'
        }
      }
    ]
  },
  {
    name: 'user-center',
    path: '/user-center',
    component: 'layout.base$view.user-center',
    meta: {
      title: 'user-center',
      i18nKey: 'route.user-center',
      hideInMenu: true
    }
  }
];
