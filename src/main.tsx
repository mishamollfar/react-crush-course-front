import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Posts, { loader as postsLoader } from './routes/Posts'
import NewPost, { action as newPostAction } from './routes/NewPost'
import './index.css'
import RouterLayout from './routes/RouterLayout'
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails'

const routers = createBrowserRouter([
  { 
    path: '/',
    element: <RouterLayout />, 
    children: [
      { 
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost /> , action: newPostAction },
          { path: '/:id', element: <PostDetails /> , loader: postDetailsLoader },
        ]
       },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>,
)
