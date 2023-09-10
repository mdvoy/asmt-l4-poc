import { type FC, Suspense } from 'react'
import { Layout } from '../components/layout'
import { Filter } from '../components/filter'
import { Content } from '../components/content'
import { VacancyList } from '../components/vacancy-list'
import type { Vacancy } from '../model'
import { isRouteErrorResponse, useLoaderData, useRouteError, type LoaderFunction, json, Await, defer } from 'react-router-dom'
import { VacancyCardSkeleton } from '../components/vacancy-card-skeleton'

// eslint-disable-next-line react-refresh/only-export-components
export const loader: LoaderFunction = async ({ request }) => {
    const searchParams = new URL(request.url).searchParams.toString()

    const response = await fetch(`/api/vacancies?${searchParams}`)
    if (!response.ok) throw json({ message: 'Error' }, { status: response.status, statusText: response.statusText })
    return defer({
        vacancies: response.json(),
    })
}

export const Component: FC = () => {
    const data = useLoaderData() as { vacancies: Vacancy[] }

    return (
        <Layout
            filter={<Filter />}
            content={
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
                        <Await resolve={data.vacancies} errorElement={<p>Error loading package location!</p>}>
                            {(vacancies) => <VacancyList vacancies={vacancies} />}
                        </Await>
                    </Suspense>
                </Content>
            }
        />
    )
}

Component.displayName = 'HomePage'

export const ErrorBoundary: FC = () => {
    const error = useRouteError() as { status: number; statusText: string; message: string }
    return isRouteErrorResponse(error) ? (
        <h1>
            {error.status} {error.statusText}
        </h1>
    ) : (
        <h1>{error?.message ?? error}</h1>
    )
}

ErrorBoundary.displayName = 'SampleErrorBoundary'
