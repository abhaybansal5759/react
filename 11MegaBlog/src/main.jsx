import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import Home from './pages/Home.jsx'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import { AuthLayout, Login } from './components/index.js'
import Signup from './pages/Signup'
import AddPost from './pages/AddPost'
import EditPost from './pages/EditPost'
import AllPosts from './pages/AllPosts'
import Post from "./pages/Post";


const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  children : [
    {
      path: '/',
      element : <Home />,      
    },
    {
      path:'/login',
      element : (
        <AuthLayout authentication={false}> 
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: "/signup",
      element : (
        <AuthLayout authentication = {false}>
          <Signup/>
        </AuthLayout>
      ),
    },
    {
      path: "/all-posts",
      element: (
        <AuthLayout authentication>
          {" "}
          <AllPosts />
        </AuthLayout>
      ),
    },
    {
      path: "/add-post",
      element: (
        <AuthLayout authentication >
          {" "}
          <AddPost />
        </AuthLayout>
      ),
    },
    {
      path: "/edit-post/:slug",
      element: (
        <AuthLayout authentication>
          {" "}
          <EditPost />
        </AuthLayout>
      ),
    },
    {
      path:"/post/:slug",
      element: <Post />,

    },
  ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router}/>
    {/* <App /> */}
    </Provider>
  </React.StrictMode>,
)
