import netlifyIdentity from 'netlify-identity-widget'

export const signIn = (callback?: () => void) => {
    netlifyIdentity.open()
    callback?.()
}

export const signOut = (callback?: () => void) => {
    netlifyIdentity.logout()
    callback?.()
}

netlifyIdentity.on('login', (user) => {
    localStorage.setItem('token', user.token?.access_token ?? '')
    localStorage.setItem(
        'user',
        JSON.stringify({ email: user.email, name: user?.user_metadata?.full_name ?? '', roles: user?.app_metadata?.roles ?? [] }),
    )
})

netlifyIdentity.on('logout', () => {
    localStorage.removeItem('token')
})
