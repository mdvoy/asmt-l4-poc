export type User = {
    email: string
    user_metadata: {
        full_name: string
    }
    app_metadata: {
        roles: string[]
    }
}
