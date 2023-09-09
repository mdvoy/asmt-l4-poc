/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

const API_URL = 'https://www.epam.com/services/vacancy/search'

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    const queryParams = {
        locale: 'en',
        limit: '1000',
        recruitingUrl: '/content/epam/en/careers/job-listings/job',
        sort: 'relevance',
        offset: '0',
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
        const data = await response.json()

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error }),
        }
    }
}

export { handler }
