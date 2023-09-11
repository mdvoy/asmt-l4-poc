import { type FC } from 'react'
import { Heading, Image, Text } from '@chakra-ui/react'
import { Error } from '../components/error'
import src403 from '../assets/403.png'

export const ErrorPage403: FC = () => {
    return (
        <Error>
            <Image src={src403} alt='403 Forbidden' />
            <Heading>403</Heading>
            <Text>Forbidden</Text>
        </Error>
    )
}
