import { type FC, Suspense } from 'react'
import { Filter } from '../components/filter'
import { Content } from '../components/content'
import { VacancyList } from '../components/vacancy-list'
import { isRouteErrorResponse, useLoaderData, useRouteError, type LoaderFunction, json, Await, defer } from 'react-router-dom'
import { VacancyCardSkeleton } from '../components/vacancy-card-skeleton'
import { GridItem } from '@chakra-ui/react'
import { ErrorPage401 } from './401'
import { ErrorPage403 } from './403'
import type { Vacancy } from '../model'

// eslint-disable-next-line react-refresh/only-export-components
export const loader: LoaderFunction = async ({ request }) => {
    const searchParams = new URL(request.url).searchParams.toString()

    const response = await fetch(`/api/vacancies?${searchParams}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    if (!response.ok) throw json({ message: 'Error' }, { status: response.status, statusText: response.statusText })
    return defer({
        vacancies: response.json(),
    })
}

export const Component: FC = () => {
    const data = useLoaderData() as { vacancies: Vacancy[] }

    return (
        <>
            <GridItem as='aside' gridColumn='1' gridRow='2'>
                <Filter />
            </GridItem>

            <GridItem as='main' w='100%' h='100%' gridColumn='2' gridRow='2' overflow='auto'>
                <Content>
                    <Suspense
                        fallback={
                            <>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <VacancyCardSkeleton key={index} />
                                ))}
                            </>
                        }
                    >
                        <Await resolve={data.vacancies} errorElement={<p>Error loading vacancies!</p>}>
                            {(vacancies) => <VacancyList vacancies={vacancies} />}
                        </Await>
                    </Suspense>
                </Content>
            </GridItem>
        </>
    )
}

Component.displayName = 'HomePage'

export const ErrorBoundary: FC = () => {
    const error = useRouteError() as { status: number; statusText: string; message: string }
    return isRouteErrorResponse(error) ? (
        <>
            {error.status === 401 && <ErrorPage401 />}
            {error.status === 403 && <ErrorPage403 />}
        </>
    ) : (
        <h1>{error?.message ?? error}</h1>
    )
}

ErrorBoundary.displayName = 'SampleErrorBoundary'
