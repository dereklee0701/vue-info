import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const router = new VueRouter({
    routes:[
        {
            name:'hello',
            path:'/about',
            component:About,
            meta:{title:'관련'},
        },
        {
            path:'/home',
            component:Home,
            name:'home',
            meta:{title:'홈'},
            children:[
                {
                    path:'news',
                    name:'news',
                    component:News,
                    meta:{isAuth:true,title:'뉴스'},
                    beforeEnter: (to, from, next) => {
                        if(sessionStorage.getItem('userId') === 'test') {
                            next()
                        } else {
                            alert('check your id')
                        }
                    }
                },
                {
                    path:'message',
                    name:'message',
                    component:Message,
                    meta:{isAuth:true,title:'메시지'},
                    children:[
                        {
                            name:'detailForName',
                            path:'detail/:id/:title',
                            component:Detail,
                            // props:{id:'001',title:'test'},  // 해당 방식 비추함 대상 방식으로 전달 
                            // props:true,                  // 해당 방식은 params 방식만 가능
                            // 해당 방식 많이 사용됨 [props({$route}){ .. 안에서 params.id 혹은 query.id]
                            props($route){
                                return{
                                    id:$route.params.id,
                                    title:$route.params.title,
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
/* 
router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth) {
        if(sessionStorage.getItem('userId') === 'test') {
            next()
        } else {
            alert('check your id')
        }
    } else {
        next()
    }
})

router.afterEach((to,from)=>{
    document.title = to.meta.title
})
 */
export default router