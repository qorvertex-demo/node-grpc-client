> **Part of the [QorVertex live demo](https://qorvertex.com).** A small sample application that shows a gRPC client calling the services of Google's open-source microservices-demo, in another repository. It is intentionally minimal and not production code.

# node-grpc-client

A **cross-repo gRPC consumer** sample application (Node.js) for the QorVertex /
QorVertex dependency catalog. It calls the **hipstershop** gRPC services defined
in the separate repo
[`GoogleCloudPlatform/microservices-demo`](https://github.com/GoogleCloudPlatform/microservices-demo)
using the dynamic `@grpc/grpc-js` + `@grpc/proto-loader` pattern
(`new proto.CartService(...)` → `client.getCart(...)`).

It validates that the scanner resolves the **dynamic** Node gRPC client pattern
cross-repo via service-segment matching (no generated stubs). After scanning,
`node-grpc-client` appears under **"Consumed by"** on CartService / CurrencyService
in microservices-demo.

> Fixture only — not meant to run; scanned as source to exercise cross-repo gRPC
> resolution for the dynamic Node client shape.
