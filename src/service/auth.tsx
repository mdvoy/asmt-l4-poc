import netlifyIdentity from 'netlify-identity-widget'

export const signIn = (callback?: () => void) => {
    netlifyIdentity.open()
    netlifyIdentity.on('login', (user) => {
        console.log('login', user)
        callback?.()
    })
}

export const signOut = (callback?: () => void) => {
    netlifyIdentity.logout()
    netlifyIdentity.on('logout', () => {
        console.log('logout')
        callback?.()
    })
}
