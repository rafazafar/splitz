import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  ignoredRoutes: ['/terms'],
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
}
