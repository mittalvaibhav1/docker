# Use an existing docker image as a base
FROM alpine

# Download and install dependencies
RUN apk add --update redis

# Specify the command to run startup
CMD ["redis-server"]