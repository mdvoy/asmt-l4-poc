import { type FC } from 'react'
import { Badge, HStack, Heading, Skeleton, Text, VStack, SkeletonText } from '@chakra-ui/react'

export const VacancyCardSkeleton: FC = () => {
    return (
        <VStack gap='2' alignItems='start' shadow='base' borderRadius='xl' p='4' width='100%'>
            <Skeleton>
                <Heading size='sm'>(Senior) Delivery Manager – Digital</Heading>
            </Skeleton>

            <Skeleton>
                <Text fontWeight='bold' fontSize='xs' color='gray' textTransform='uppercase'>
                    Greece, other
                </Text>
            </Skeleton>

            <HStack>
                <Skeleton>
                    <Badge colorScheme='green'>Remote</Badge>
                </Skeleton>
                <Skeleton>
                    <Badge colorScheme='blue'>Relocation</Badge>
                </Skeleton>
                <Skeleton>
                    <Badge colorScheme='purple'>Office</Badge>
                </Skeleton>
            </HStack>

            <SkeletonText>
                <Text fontSize='sm' color='blackAlpha.800'>
                    We are looking for thought leaders possessing deep consulting and technology acumen to solve our clients’ toughest
                    technology, strategy and transformation problems from a Data Management and...
                </Text>
            </SkeletonText>
        </VStack>
    )
}
