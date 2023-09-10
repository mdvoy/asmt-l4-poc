import { Avatar, Button, Flex, Grid, GridItem, Heading, Spacer } from '@chakra-ui/react'
import { type FC } from 'react'
import { signIn } from '../service'

type PropTypes = {
    filter: React.ReactNode
    content: React.ReactNode
}

export const Layout: FC<PropTypes> = ({ filter, content }) => {
    return (
        <Grid as='section' templateRows='56px 1fr' w='100%' h='100vh' templateColumns='400px 1fr' gap='8' p='4'>
            <GridItem as='header' w='100%' h='100%' gridColumn='1 / span 2' p='8px 12px' shadow='base' borderRadius='xl'>
                <Flex h='100%' w='100%' alignItems='center'>
                    <Heading size='md'>asmt-l4-poc</Heading>

                    <Spacer />

                    <Button onClick={() => signIn()}>Login</Button>

                    <Avatar name='Name Lastname' size='sm' />
                </Flex>
            </GridItem>

            <GridItem as='aside' gridColumn='1' gridRow='2'>
                {filter}
            </GridItem>

            <GridItem as='main' w='100%' h='100%' gridColumn='2' gridRow='2' overflow='auto'>
                {content}
            </GridItem>
        </Grid>
    )
}
