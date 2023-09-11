import {
    Avatar,
    Button,
    Flex,
    Grid,
    GridItem,
    HStack,
    Heading,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Spacer,
    Tag,
    Text,
} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { type FC, type PropsWithChildren } from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import { signIn, signOut } from '../service'

export const Layout: FC<PropsWithChildren> = () => {
    return (
        <Grid as='section' templateRows='56px 1fr' w='100%' h='100vh' templateColumns='400px 1fr' gap='8' p='4'>
            <GridItem as='header' w='100%' h='100%' gridColumn='1 / span 2' p='8px 12px' shadow='base' borderRadius='xl'>
                <Flex h='100%' w='100%' alignItems='center'>
                    <Heading size='md'>asmt-l4-poc</Heading>

                    <Spacer />

                    {netlifyIdentity.currentUser() ? (
                        <Menu>
                            <MenuButton>
                                <Avatar name={netlifyIdentity.currentUser()?.user_metadata?.full_name} size='sm' />
                            </MenuButton>

                            <MenuList>
                                <Text color='#97A0AF' w='100%' p='12px'>
                                    {netlifyIdentity.currentUser()?.email}
                                </Text>
                                <HStack ml='12px'>
                                    {netlifyIdentity.currentUser()?.app_metadata.roles?.map((r) => (
                                        <Tag key={r}>{r}</Tag>
                                    ))}
                                </HStack>

                                <MenuDivider />

                                <MenuItem onClick={() => signOut(() => window.location.reload())}>Выйти</MenuItem>
                            </MenuList>
                        </Menu>
                    ) : (
                        <Button onClick={() => signIn()}>Log In</Button>
                    )}
                </Flex>
            </GridItem>

            <Outlet />
        </Grid>
    )
}
