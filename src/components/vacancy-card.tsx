import { type FC } from 'react'
import { Badge, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import type { Vacancy } from '../model'

type PropTypes = Vacancy

export const VacancyCard: FC<PropTypes> = ({ title, description }) => {
    return (
        <VStack gap='2' alignItems='start' shadow='base' borderRadius='xl' p='4'>
            <Heading size='sm'>{title}</Heading>

            <Text fontWeight='bold' fontSize='xs' color='gray'>
                WEEHAWKEN, NJ, USA
            </Text>

            <HStack>
                <Badge colorScheme='gray'>Remote</Badge>
                <Badge colorScheme='gray'>Office</Badge>
                <Badge colorScheme='purple'>Open to Relocation</Badge>
            </HStack>

            <Text fontSize='sm' color='blackAlpha.800'>
                {description}
            </Text>
        </VStack>
    )
}
