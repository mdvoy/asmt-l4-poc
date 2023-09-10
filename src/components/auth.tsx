// Hooks
import { useEffect, type FC, type PropsWithChildren } from 'react'
// import { useNavigate } from 'react-router-dom'

export const Auth: FC<PropsWithChildren> = ({ children }) => {
    // const navigate = useNavigate()

    useEffect(() => {
        fetch('/api/user-info')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }, [])

    return children
}
