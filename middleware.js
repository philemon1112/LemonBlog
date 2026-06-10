import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
    '/',
    '/api/webhook/clerk',
    '/account(.*)',
    '/blogs',
    '/blogs(.*)',
]);

export default clerkMiddleware(async (auth, request) => {
    if (!isPublicRoute(request)) {
        await auth.protect();
    }
});

export const config = {
    matcher: [String.raw`/((?!.+\.[\w]+$|_next).*)`, '/', '/(api|trpc)(.*)'],
};
