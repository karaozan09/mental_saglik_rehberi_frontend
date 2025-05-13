import { createRouter, createWebHistory } from 'vue-router'
import { appLocalStorage } from '@/app/utils/storage/storage';
import store from '../store'
import { computed } from 'vue'

//Frontend
import FrontLayout from '@/app/views/frontend/layout/FrontLayout.vue'
import Home from '@/app/views/frontend/pages/Home.vue'
import FrontLogin from '@/app/views/frontend/pages/Login.vue'


import UserLayout from '@/app/views/frontend/layout/UserLayout.vue'
import UserIndex from '@/app/views/frontend/pages/user/Index.vue'
import UserSettings from '@/app/views/frontend/pages/user/Settings.vue'



//admin
import AdminLogin from  '@/app/views/admin/pages/Login.vue';
import AdminLayout from '@/app/views/admin/layout/AdminLayout.vue';
import AdminDashboard from '@/app/views/admin/pages/Dashboard.vue';
import AdminTeams from '@/app/views/admin/pages/Teams.vue';
import AdminUsers from '@/app/views/admin/pages/Users.vue';
import AdminSocialMedia from '@/app/views/admin/pages/SocialMedia.vue';
import AdminSettings from '@/app/views/admin/pages/Settings.vue';


import Notfound from '@/app/views/error/Notfound.vue'




const routes = [
    {
        path:'/',
        name:"FrontLayout",
        component:FrontLayout,
        children:[
            {
                path:'/',
                name: "Home",
                component:Home,
            },
            {
                path:'/login',
                name: "FrontLogin",
                component:FrontLogin,
            },    
                            
        ]
    },

    {
      path:'/user',
      component:UserLayout,
      redirect: '/user/index',
      children:[
        {
          path:'index',
          name:'UserIndex',
          component:UserIndex,
          meta: { 
            displayName: 'Chat Panel',
            requiresAuth: true
         }
        },
        {
          path:'settings',
          name:'UserSettings',
          component:UserSettings,
          meta: { 
            displayName: 'Ayarlar',
            requiresAuth: true
         }
        },
      ]
    },




    {
      path:'/admin/auth',
      name:'AdminLogin',
      component:AdminLogin
    },

    {
      path:'/admin',
      component:AdminLayout,
      redirect: '/admin/dashboard',
      children:[
        {
          path:'dashboard',
          name:'AdminDashboard',
          component:AdminDashboard,
          meta: { 
            displayName: 'Gösterge Paneli',
            requiresAuth: true 
           }
        },
        {
          path:'teams',
          name:'AdminTeams',
          component:AdminTeams,
          meta: { 
            requiresAuth: true 
           }
        },
        {
          path:'users',
          name:'AdminUsers',
          component:AdminUsers,
          meta: { 
            requiresAuth: true 
           }
        },
        {
          path:'social-media',
          name:'AdminSocialMedia',
          component:AdminSocialMedia,
          meta: { 
            requiresAuth: true 
           }
        },
        {
          path:'settings',
          name:'AdminSettings',
          component:AdminSettings,
          meta: { 
            requiresAuth: true 
           }
        },
      ]
    },

    {
        path:'/:catchAll(.*)',
        name:'Notfound',
        component:Notfound
    }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el:to.hash,
        top: 90 
      };
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['isAuthenticated']) {
      next();
    } else {
      next({ path: '/' });
    }
  } else {
    if(store.getters['isAuthenticated'] && to.name == 'Login'){
      next({ name: 'UserIndex' });
    }else{
      next();
    } 
  }
});

export default router