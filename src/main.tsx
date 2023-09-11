import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import netlifyIdentity from 'netlify-identity-widget'
import { Layout } from './components/layout'

netlifyIdentity.init()

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                lazy: () => import('./pages/home'),
            },
        ],
    },
    {
        path: '*',
        element: <h1>404 Not Found</h1>,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>,
)
