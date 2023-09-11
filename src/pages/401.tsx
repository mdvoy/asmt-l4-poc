import { type FC } from 'react'
import { Button, Heading, Image, Text } from '@chakra-ui/react'
import { Error } from '../components/error'
import src401 from '../assets/401.png'
import { signIn } from '../service'
import { useNavigate } from 'react-router-dom'

export const ErrorPage401: FC = () => {
    const navigate = useNavigate()
    return (
        <Error>
            <Image src={src401} alt='401 Unauthorized' />
            <Heading>401</Heading>
            <Text>Unauthorized</Text>
            <Button onClick={() => signIn(() => navigate('/'))} colorScheme='purple'>
                Log In
            </Button>
        </Error>
    )
}
