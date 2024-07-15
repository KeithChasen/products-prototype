import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList/>
  },
  {
    path: '/:id',
    element: <ProductDetail/>
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
