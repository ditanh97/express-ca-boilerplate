
Node Clean Architecture
=======================

# Features

## Auth Middleware
JSON web token (JWT) is used for securing api and implemented as auth middleware

## Health Check
Since application is constanly serving request for users, we want to ship features and fixes as soon as they are ready. If user using the product at the time of the deployment, the app should stop accepting new requests, finish all the ongoing request, and clean up the resources it used. Resources may include database connection or file locks
- healthcheck end point :`localhost:${port}/healthcheck`
- healthcheck package : `@godaddy/terminus`

## Security Protection
Express app does not come with security HTTP headers, it expose sensitive information. `helmet` is used to improves nodejs app security by safeguarding HTTP headers. Common security threats such as:
- XSS (Cross-Site Scripting) [prevent with  CSP HTTP Header - what sources of content a web page is allowed to load and execute]
- click-jacking attacks
- Content security policy vulnerabilities (header begin with `X-` could be indicating the framework used by the server)

### About Helmet
`helmet` is `express` middlleware, which is a wrapper of 15 sub-middlewares 

## Compression
`compression` middleware is used for compressing response bodies for all request that traverse through the middleware. This middleware will never compress response that include a `Cache-Control` header with `no-transform` directive, as compressing will transform the body

## Logger
- `winston` : logger for everything
- `morgan` : `express` middleware to log HTTP requests and errors

# Reference

- The architecture is inspired from :
    - [Royib - Clean Architecture Node](https://github.com/royib/clean-architecture-node)
    - [panagiop - Node CA with mongodb and redis](https://github.com/panagiop/node.js-clean-architecture)
- [Health Checks](https://www.godaddy.com/engineering/2018/02/22/announcing-terminus/)
- [Helmet](https://blog.logrocket.com/using-helmet-node-js-secure-application/)
- [Logger](https://lioncoding.com/logging-in-express-js-using-winston-and-morgan/#:~:text=Morgan%20is%20a%20Node.,even%20a%20built%2Din%20profiler.)