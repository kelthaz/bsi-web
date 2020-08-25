FROM node:10-alpine AS base
LABEL maintainers="sysadmins@the-cocktail.com"
WORKDIR /app
COPY package*.json ./
RUN npm install --only-produciton
COPY . .
RUN npm run-script build


FROM cypress/base:12 AS test
WORKDIR /app
COPY --from=base /app /app
#FROM base AS test
# Install not production dependencies such as linterns and test suites.
RUN npm install
RUN npx cypress install

FROM base AS release
WORKDIR /app
CMD [ "npm", "run-script","start:docker" ]