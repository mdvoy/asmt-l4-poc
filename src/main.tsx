import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { LoginPage } from './pages/login'
import netlifyIdentity from 'netlify-identity-widget'
import { ErrorPage } from './pages/401'
import { Auth } from './components/auth'

netlifyIdentity.init()

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Auth>
                <Outlet />
            </Auth>
        ),
        children: [
            {
                path: '/',
                lazy: () => import('./pages/home'),
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/401',
        element: <ErrorPage code={401} />,
    },
    {
        path: '/403',
        element: <ErrorPage code={403} />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>,
)
