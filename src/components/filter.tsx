import { type FC } from 'react'
import { Button, Checkbox, FormControl, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import { Form } from 'react-router-dom'

export const Filter: FC = () => {
    return (
        <VStack alignItems='start' shadow='base' borderRadius='xl' p='4'>
            <Heading size='md'>Filter</Heading>

            <Form method='get' style={{ width: '100%' }}>
                <VStack as='fieldset' w='100%' spacing='16px' alignItems='flex-start'>
                    <FormControl>
                        <FormLabel color='gray.500' fontSize='md'>
                            Keyword
                        </FormLabel>

                        <Input aria-label='search vacancy' name='query' />
                    </FormControl>

                    <FormControl id='remote'>
                        <FormLabel htmlFor='remote' color='gray.500' fontSize='md'>
                            Remote
                        </FormLabel>

                        <Checkbox name='remote' value='true' />
                    </FormControl>

                    <FormControl id='office'>
                        <FormLabel htmlFor='office' color='gray.500' fontSize='md'>
                            Office
                        </FormLabel>

                        <Checkbox name='office' value='true' />
                    </FormControl>

                    <FormControl id='relocation'>
                        <FormLabel htmlFor='relocation' color='gray.500' fontSize='md'>
                            Relocation
                        </FormLabel>

                        <Checkbox name='relocation' value='true' />
                    </FormControl>

                    <Button colorScheme='blue' type='submit'>
                        Search
                    </Button>
                </VStack>
            </Form>
        </VStack>
    )
}
