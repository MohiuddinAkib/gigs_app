FROM node

# Maintainer
LABEL maintainer="md akib"

# Arguments
ARG PORT=${PORT}
ARG NODE_ENV=${NODE_ENV}

# Environment variables
ENV PORT=${PORT}
ENV NODE_ENV=${NODE_ENV}

# Working dir
WORKDIR /usr/app

# Adding yarn
ADD https://yarnpkg.com/latest.tar.gz .

# Copying and caching dependencies
COPY package*.json ./

COPY yarn.lock ./

# Installing dependencies
RUN yarn install

# Copying the source code
COPY . .

# Exposing port
EXPOSE ${PORT}

# Command
CMD [ "yarn", "start:dev" ]