import { createRouter, createWebHistory } from 'vue-router'

//Frontend
import FrontLayout from '@/app/views/frontend/layout/FrontLayout.vue'
import Home from '@/app/views/frontend/pages/Home.vue'
import FrontLogin from '@/app/views/frontend/pages/Login.vue'


import UserLayout from '@/app/views/frontend/pages/user/layout/UserLayout.vue'


//instructor
import InstructorDashboard from '@/app/views/frontend/pages/user/instructor/Dashboard.vue'


//author
import AuthorDashboard from '@/app/views/frontend/pages/user/author/Dashboard.vue'


//student
import StudentDashboard from '@/app/views/frontend/pages/user/student/Dashboard.vue'


//admin
import AdminLogin from  '@/app/views/admin/pages/Login.vue';
import AdminLayout from '@/app/views/admin/layout/AdminLayout.vue';
import Dashboard from '@/app/views/admin/pages/Dashboard.vue';


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

    //instrucotr
    {
      path:'/instructor',
      component:UserLayout,
      redirect: '/instructor/dashboard',
      children:[
        {
          path:'dashboard',
          name:'InstructorDashboard',
          component:InstructorDashboard,
          meta: { displayName: 'Gösterge Paneli' }
        },
      ]
    },

    //author
    {
      path:'/author',
      component:UserLayout,
      redirect: '/author/dashboard',
      children:[
        {
          path:'dashboard',
          name:'AuthorDashboard',
          component:AuthorDashboard,
          meta: { displayName: 'Gösterge Paneli' }
        },
      ]
    },

     //student
     {
      path:'/student',
      component:UserLayout,
      redirect: '/student/dashboard',
      children:[
        {
          path:'dashboard',
          name:'StudentDashboard',
          component:StudentDashboard,
          meta: { displayName: 'Gösterge Paneli' }
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
          name:'Dashboard',
          component:Dashboard,
          meta: { displayName: 'Gösterge Paneli' }
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
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// router.beforeEach((to, from, next) => {
//   let requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
//   let isLogin = computed(() =>store.getters.isLogin);

//   if (requiresAuth && !isLogin) {
//     next({ name: "Login" });
//   }else {
//     next();
//   }
// });

export default router