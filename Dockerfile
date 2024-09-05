FROM alpine:3.20 AS downloader

ENV POCKETBASE_VERSION=0.22.20

RUN wget https://github.com/pocketbase/pocketbase/releases/download/v${POCKETBASE_VERSION}/pocketbase_${POCKETBASE_VERSION}_linux_amd64.zip -O pocketbase.zip \
 && unzip pocketbase.zip

FROM node:22.8.0-alpine3.20 AS builder

ADD . /build
WORKDIR /build

ENV PUBLIC_POCKETBASE_HOST=""

RUN npm install && npm run build \ 
 && tar -C /build/.svelte-kit/output/client -cvvf /build/app.tar .


FROM alpine:3.20

RUN mkdir -p /app/pb_public
WORKDIR /app

COPY --from=downloader /pocketbase /usr/local/bin/pocketbase
COPY --from=builder /build/app.tar /app/app.tar

RUN tar -xf /app/app.tar -C /app/pb_public && rm /app/app.tar
ADD migrations /app/pb_migrations

EXPOSE 8090

ENTRYPOINT ["pocketbase", "serve", "--http=0.0.0.0:8090"]