
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { LayoutComponent } from './layout/layout.component';


export const routes: Routes =[
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
    //    {
    //     path:'host',
    //     component: LayoutComponent
    // },
    // {
    //     path: 'core',
    //     loadComponent: ()=> loadRemoteModule('core','./Module').then(m=>m.AppModule)
    // },
    //     {
    //     path: 'products',
    //     loadComponent: ()=> loadRemoteModule('products','./Component').then((m:any)=>m.AppComponent)
    // }
    // ,
        {
        path: 'dashboard',
        loadChildren: ()=> loadRemoteModule('dashboard','./Module').then(m=>m.AppRemoteModule)
    }
    //   ,
    //   {
    //     path: 'default',
    //     loadComponent: () => import('./demo/dashboard/default/default.component').then((c) => c.DefaultComponent)
    //   },
    //   {
    //     path: 'typography',
    //     loadComponent: () => import('./demo/elements/typography/typography.component').then((c) => c.TypographyComponent)
    //   },
    //   {
    //     path: 'color',
    //     loadComponent: () => import('./demo/elements/element-color/element-color.component').then((c) => c.ElementColorComponent)
    //   },
    //   {
    //     path: 'sample-page',
    //     loadComponent: () => import('./demo/other/sample-page/sample-page.component').then((c) => c.SamplePageComponent)
    //   }
    ]
  },
//   {
//     path: '',
//     component: GuestComponent,
//     children: [
//       {
//         path: 'login',
//         loadComponent: () => import('./demo/pages/authentication/login/login.component').then((c) => c.LoginComponent)
//       },
//       {
//         path: 'register',
//         loadComponent: () => import('./demo/pages/authentication/register/register.component').then((c) => c.RegisterComponent)
//       }
//     ]
//   }

   
]

