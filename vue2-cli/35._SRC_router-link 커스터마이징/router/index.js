import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

export default new VueRouter({
    routes:[
        {
            name:'hello',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
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