import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { LocalScheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/login",
    "logout": "/login",
    "home": "/admin/",
    "callback": "/login"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "local"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new LocalScheme($auth, {
  "url": "http://api.ecooil.colibri.tj/api",
  "token": {
    "property": "access_token",
    "maxAge": 86400
  },
  "refreshToken": {
    "property": "refresh_token"
  },
  "user": {
    "property": "user"
  },
  "endpoints": {
    "login": {
      "url": "http://api.ecooil.colibri.tj/api/Login"
    },
    "refresh": {
      "url": "http://1319152-cd48417.tw1.ru/token/refresh/"
    },
    "logout": {
      "url": "http://api.ecooil.colibri.tj/api/Logout"
    },
    "user": {
      "url": "http://api.ecooil.colibri.tj/api/UserDetailView"
    }
  },
  "name": "local"
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
