/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

declare module "@elegant-router/types" {
  type ElegantConstRoute = import('@elegant-router/vue').ElegantConstRoute;

  /**
   * route layout
   */
  export type RouteLayout = "base" | "blank";

  /**
   * route map
   */
  export type RouteMap = {
    "root": "/";
    "not-found": "/:pathMatch(.*)*";
    "exception": "/exception";
    "exception_403": "/exception/403";
    "exception_404": "/exception/404";
    "exception_500": "/exception/500";
    "document": "/document";
    "document_project": "/document/project";
    "document_project-link": "/document/project-link";
    "document_vue": "/document/vue";
    "document_vite": "/document/vite";
    "document_unocss": "/document/unocss";
    "document_naive": "/document/naive";
    "document_antd": "/document/antd";
    "403": "/403";
    "404": "/404";
    "500": "/500";
    "cockpit-manage": "/cockpit-manage";
    "cockpit-manage_list": "/cockpit-manage/list";
    "designer": "/designer";
    "home": "/home";
    "login": "/login/:module(pwd-login|code-login|register|reset-pwd|bind-wechat)?";
    "manage": "/manage";
    "manage_menu": "/manage/menu";
    "manage_role": "/manage/role";
    "manage_user": "/manage/user";
    "manage_user-detail": "/manage/user-detail/:id";
    "preview": "/preview";
    "user-center": "/user-center";
  };

  /**
   * route key
   */
  export type RouteKey = keyof RouteMap;

  /**
   * route path
   */
  export type RoutePath = RouteMap[RouteKey];

  /**
   * custom route key
   */ 
  export type CustomRouteKey = Extract<
    RouteKey,
    | "root"
    | "not-found"
    | "exception"
    | "exception_403"
    | "exception_404"
    | "exception_500"
    | "document"
    | "document_project"
    | "document_project-link"
    | "document_vue"
    | "document_vite"
    | "document_unocss"
    | "document_naive"
    | "document_antd"
  >;

  /**
   * the generated route key
   */ 
  export type GeneratedRouteKey = Exclude<RouteKey, CustomRouteKey>;

  /**
   * the first level route key, which contain the layout of the route
   */
  export type FirstLevelRouteKey = Extract<
    RouteKey,
    | "403"
    | "404"
    | "500"
    | "cockpit-manage"
    | "designer"
    | "home"
    | "login"
    | "manage"
    | "preview"
    | "user-center"
  >;

  /**
   * the custom first level route key
   */
  export type CustomFirstLevelRouteKey = Extract<
    CustomRouteKey,
    | "root"
    | "not-found"
    | "exception"
    | "document"
  >;

  /**
   * the last level route key, which has the page file
   */
  export type LastLevelRouteKey = Extract<
    RouteKey,
    | "403"
    | "404"
    | "500"
    | "login"
    | "cockpit-manage_list"
    | "designer"
    | "home"
    | "manage_menu"
    | "manage_role"
    | "manage_user-detail"
    | "manage_user"
    | "preview"
    | "user-center"
  >;

  /**
   * the custom last level route key
   */
  export type CustomLastLevelRouteKey = Extract<
    CustomRouteKey,
    | "root"
    | "not-found"
    | "exception_403"
    | "exception_404"
    | "exception_500"
    | "document_project"
    | "document_project-link"
    | "document_vue"
    | "document_vite"
    | "document_unocss"
    | "document_naive"
    | "document_antd"
  >;

  /**
   * the single level route key
   */
  export type SingleLevelRouteKey = FirstLevelRouteKey & LastLevelRouteKey;

  /**
   * the custom single level route key
   */
  export type CustomSingleLevelRouteKey = CustomFirstLevelRouteKey & CustomLastLevelRouteKey;

  /**
   * the first level route key, but not the single level
  */
  export type FirstLevelRouteNotSingleKey = Exclude<FirstLevelRouteKey, SingleLevelRouteKey>;

  /**
   * the custom first level route key, but not the single level
   */
  export type CustomFirstLevelRouteNotSingleKey = Exclude<CustomFirstLevelRouteKey, CustomSingleLevelRouteKey>;

  /**
   * the center level route key
   */
  export type CenterLevelRouteKey = Exclude<GeneratedRouteKey, FirstLevelRouteKey | LastLevelRouteKey>;

  /**
   * the custom center level route key
   */
  export type CustomCenterLevelRouteKey = Exclude<CustomRouteKey, CustomFirstLevelRouteKey | CustomLastLevelRouteKey>;

  /**
   * the center level route key
   */
  type GetChildRouteKey<K extends RouteKey, T extends RouteKey = RouteKey> = T extends `${K}_${infer R}`
    ? R extends `${string}_${string}`
      ? never
      : T
    : never;

  /**
   * the single level route
   */
  type SingleLevelRoute<K extends SingleLevelRouteKey = SingleLevelRouteKey> = K extends string
    ? Omit<ElegantConstRoute, 'children'> & {
        name: K;
        path: RouteMap[K];
        component: `layout.${RouteLayout}$view.${K}`;
      }
    : never;

  /**
   * the last level route
   */
  type LastLevelRoute<K extends GeneratedRouteKey> = K extends LastLevelRouteKey
    ? Omit<ElegantConstRoute, 'children'> & {
        name: K;
        path: RouteMap[K];
        component: `view.${K}`;
      }
    : never;
  
  /**
   * the center level route
   */
  type CenterLevelRoute<K extends GeneratedRouteKey> = K extends CenterLevelRouteKey
    ? Omit<ElegantConstRoute, 'component'> & {
        name: K;
        path: RouteMap[K];
        children: (CenterLevelRoute<GetChildRouteKey<K>> | LastLevelRoute<GetChildRouteKey<K>>)[];
      }
    : never;

  /**
   * the multi level route
   */
  type MultiLevelRoute<K extends FirstLevelRouteNotSingleKey = FirstLevelRouteNotSingleKey> = K extends string
    ? ElegantConstRoute & {
        name: K;
        path: RouteMap[K];
        component: `layout.${RouteLayout}`;
        children: (CenterLevelRoute<GetChildRouteKey<K>> | LastLevelRoute<GetChildRouteKey<K>>)[];
      }
    : never;
  
  /**
   * the custom first level route
   */
  type CustomSingleLevelRoute<K extends CustomFirstLevelRouteKey = CustomFirstLevelRouteKey> = K extends string
    ? Omit<ElegantConstRoute, 'children'> & {
        name: K;
        path: RouteMap[K];
        component?: `layout.${RouteLayout}$view.${LastLevelRouteKey}`;
      }
    : never;

  /**
   * the custom last level route
   */
  type CustomLastLevelRoute<K extends CustomRouteKey> = K extends CustomLastLevelRouteKey
    ? Omit<ElegantConstRoute, 'children'> & {
        name: K;
        path: RouteMap[K];
        component?: `view.${LastLevelRouteKey}`;
      }
    : never;

  /**
   * the custom center level route
   */
  type CustomCenterLevelRoute<K extends CustomRouteKey> = K extends CustomCenterLevelRouteKey
    ? Omit<ElegantConstRoute, 'component'> & {
        name: K;
        path: RouteMap[K];
        children: (CustomCenterLevelRoute<GetChildRouteKey<K>> | CustomLastLevelRoute<GetChildRouteKey<K>>)[];
      }
    : never;

  /**
   * the custom multi level route
   */
  type CustomMultiLevelRoute<K extends CustomFirstLevelRouteNotSingleKey = CustomFirstLevelRouteNotSingleKey> =
    K extends string
      ? ElegantConstRoute & {
          name: K;
          path: RouteMap[K];
          component: `layout.${RouteLayout}`;
          children: (CustomCenterLevelRoute<GetChildRouteKey<K>> | CustomLastLevelRoute<GetChildRouteKey<K>>)[];
        }
      : never;

  /**
   * the custom route
   */
  type CustomRoute = CustomSingleLevelRoute | CustomMultiLevelRoute;

  /**
   * the generated route
   */
  type GeneratedRoute = SingleLevelRoute | MultiLevelRoute;

  /**
   * the elegant route
   */
  type ElegantRoute = GeneratedRoute | CustomRoute;
}
