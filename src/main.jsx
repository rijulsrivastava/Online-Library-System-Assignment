import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import BrowseBook from './components/BrowseBook.jsx'
import AddBook from './components/AddBook.jsx'
import BookDetails from './components/BookDetails.jsx'
import Error from './components/Error.jsx'


// createBrowserRouter is used to define routes of the components
const appProvider = createBrowserRouter([
  {
    path:'/',
    element:<App/>,

    // children is used to define routes of the children of App component
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

      // below are the dynamic routes
      {
        path:'/book/:category',
        element:<BrowseBook/>
      },
      {
        path:'/bookDetails/:id',
        element:<BookDetails/>
      }
    ],
    // below given the route to Error component if invalid routes
    errorElement:<Error/>
  }
])

  createRoot(document.getElementById('root')).render(
    <RouterProvider router={appProvider}/>
  )
