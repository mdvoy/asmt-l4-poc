import { type FC } from 'react'
import { Center, Heading, Image, VStack, Text } from '@chakra-ui/react'

import src401 from '../assets/401.png'
import src403 from '../assets/403.png'

type PropTypes = {
    code: 401 | 403
}

export const ErrorPage: FC<PropTypes> = ({ code }) => {
    const unauthorizedJSX = (
        <>
            <Image src={src401} />
            <Heading>401</Heading>
            <Text>Unauthorized</Text>
        </>
    )

    const forbiddenJSX = (
        <>
            <Image src={src403} />
            <Heading>403</Heading>
            <Text>Forbidden</Text>
        </>
    )

    return (
        <Center w='100%' h='100%'>
            <VStack>
                {code === 401 && unauthorizedJSX}
                {code === 403 && forbiddenJSX}
            </VStack>
        </Center>
    )
}
