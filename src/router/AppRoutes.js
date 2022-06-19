import Home from '../views/Home/Home'
import Post from '../views/Post/Post'
import Auth from '../views/Auth/Auth'
import PostCreate from '../views/Post/Create/PostCreate'
import SignIn from '../views/Auth/SignIn/SignIn'
import SignUp from '../views/Auth/SignUp/SignUp'

const AppRoutes = [
    {
        component: <Home />,
        path: '/',
        protect: true
    },
    {
        component: <Post />,
        path: '/',
        protect: true,
        children: [
            {
                component: <PostCreate />,
                path: 'create-post',
                protect: true
            }
        ]
    },
    {
        component: <Auth />,
        path: '/',
        protect: true,
        children: [
            {
                component: <SignIn />,
                path: 'sign-in',
                protect: false
            },
            {
                component: <SignUp />,
                path: 'sign-up',
                protect: false
            }
        ]
    }
]

export default AppRoutes