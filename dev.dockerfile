# extend main image (make sure to build it first with `npm run docker:build`)
FROM psf/slack-welcome-bot

# set development environment variable
ENV NODE_ENV=development
