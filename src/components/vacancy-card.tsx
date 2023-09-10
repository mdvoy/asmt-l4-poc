import { type FC } from 'react'
import { Badge, HStack, Heading, Link, Text, VStack } from '@chakra-ui/react'
import type { Vacancy } from '../model'
import { ExternalLinkIcon } from '@chakra-ui/icons'

type PropTypes = Vacancy

export const VacancyCard: FC<PropTypes> = ({ name, description, location, remote, relocation, office, url }) => {
    return (
        <VStack gap='2' alignItems='start' shadow='base' borderRadius='xl' p='4'>
            <Heading size='sm'>{name}</Heading>

            <Text fontWeight='bold' fontSize='xs' color='gray' textTransform='uppercase'>
                {location}
            </Text>

            <HStack>
                {remote && <Badge colorScheme='green'>Remote</Badge>}
                {relocation && <Badge colorScheme='blue'>Relocation</Badge>}
                {office && <Badge colorScheme='purple'>Office</Badge>}
            </HStack>

            <Text fontSize='sm' color='blackAlpha.800'>
                {description}
            </Text>

            <Link href={url} isExternal color='blue'>
                More Details <ExternalLinkIcon mx='2px' />
            </Link>
        </VStack>
    )
}
