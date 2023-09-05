import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { HomePage } from './pages/home'
import { LoginPage } from './pages/login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <div>404</div>,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>,
)
