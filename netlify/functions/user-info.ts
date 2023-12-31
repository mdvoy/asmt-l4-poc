import type { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
    const { identity, user } = context.clientContext as { identity: unknown; user: unknown }
    return {
        statusCode: 200,
        body: JSON.stringify({ identity, user }),
    }
}

export { handler }
