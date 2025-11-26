FROM denoland/deno:2.5.6 AS builder
WORKDIR /app

COPY deno.json deno.lock .

RUN deno install --frozen --allow-scripts

COPY assets ./assets
COPY components ./components
COPY islands ./islands
COPY routes ./routes
COPY static ./static
COPY vite.config.ts client.ts main.ts utils.ts .

RUN deno task build && deno cache main.ts 

FROM denoland/deno:distroless-2.5.6
WORKDIR /app

COPY --from=builder /app .

EXPOSE 8000

CMD ["serve", "-A", "_fresh/server.js"]
