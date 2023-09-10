/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import type { Vacancy } from '../../src/model/vacancy'

const API_URL = 'https://www.epam.com/services/vacancy/search'

type ResponseType<T extends Vacancy> = {
    result: T[]
    total: number
}

type FullVacancy = {
    urgent: boolean
    relocation: boolean
    remote: boolean
    office: boolean
    continuum: boolean
    localizedGroup: string
    isGdo: boolean
    hideCityOnPage: boolean
    id: number
    name: string
    language: string
    internationalCountry: string
    internationalCity: string
    localizedCity: string
    localizedCountry: string
    displayedLocation: string
    description: string
    shortDescription: string
    shortDescription23: string
    url: string
    location: string
}

const mapper = (vacancy: FullVacancy[]): Vacancy[] =>
    vacancy.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        relocation: item.relocation,
        remote: item.remote,
        office: item.office,
        url: item.url,
        location: `${item.internationalCountry}, ${item.internationalCity} `,
    }))

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    const queryParams = {
        locale: 'en',
        limit: '10000',
        recruitingUrl: '/content/epam/en/careers/job-listings/job',
        sort: 'relevance',
        offset: '0',
        ...event.queryStringParameters,
    }

    const queryString = new URLSearchParams(queryParams).toString()
    const fullUrl = `${API_URL}?${queryString}`

    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    try {
        const response = await fetch(fullUrl, fetchOptions)
        const data: ResponseType<FullVacancy> = await response.json()

        return {
            statusCode: 200,
            body: JSON.stringify(mapper(data.result)),
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error }),
        }
    }
}

export { handler }
