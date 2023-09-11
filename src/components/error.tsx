import { type FC, type PropsWithChildren } from 'react'
import { Grid, VStack } from '@chakra-ui/react'

export const Error: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Grid w='100%' h='100%' gridColumn='1 / span 2'>
            <VStack>{children}</VStack>
        </Grid>
    )
}
