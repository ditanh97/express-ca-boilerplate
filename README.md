
Node Clean Architecture
=======================

# Features
==========
## Health Check
Since application is constanly serving request for users, we want to ship features and fixes as soon as they are ready. If user using the product at the time of the deployment, the app should stop accepting new requests, finish all the ongoing request, and clean up the resources it used. Resources may include database connection or file locks
- healthcheck end point :`localhost:${port}/healthcheck`


### Reference

- The architecture inspired inspire from :
    - [Royib - Clean Architecture Node](https://github.com/royib/clean-architecture-node)
    - [panagiop - Node CA with mongodb and redis](https://github.com/panagiop/node.js-clean-architecture)
- Health check from [Health Checks and Graceful Shutdown for Node.js Applications](https://www.godaddy.com/engineering/2018/02/22/announcing-terminus/)
