import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* mendaftarkan/menggunakan routing dari route/index.jsx */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
