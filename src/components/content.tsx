import { type FC } from 'react'
import { Heading, VStack } from '@chakra-ui/react'

type PropTypes = {
    children: React.ReactNode
}

export const Content: FC<PropTypes> = ({ children }) => {
    return (
        <VStack alignItems='start' p='4'>
            <Heading size='md'>Vacancies</Heading>
            {children}
        </VStack>
    )
}
