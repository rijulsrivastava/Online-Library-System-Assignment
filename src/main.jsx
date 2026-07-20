import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import Category from './components/Category.jsx'
import BrowseBook from './components/BrowseBook.jsx'
import AddBook from './components/AddBook.jsx'
import BookList from './components/BookList.jsx'
import BookDetails from './components/BookDetails.jsx'
import Error from './components/Error.jsx'

const appProvider = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/browseBook',
        element:<BrowseBook/>
      },
      {
        path:'/addBook',
        element:<AddBook/>
      },
      {
        path:'/book/:category',
        element:<BrowseBook/>
      },
      {
        path:'/bookDetails/:id',
        element:<BookDetails/>
      }
    ],
    errorElement:<Error/>
  }
])

  createRoot(document.getElementById('root')).render(
    <RouterProvider router={appProvider}/>
  )
