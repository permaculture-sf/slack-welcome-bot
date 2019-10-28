# extend main image (make sure to build it first with `npm run docker:build`)
FROM psf/slack-welcome-bot

# set development environment variable
ENV NODE_ENV=development

# create working dir
WORKDIR /usr/src/app

# build ts and install all of package.json, not just production
RUN npm install

# install additional dev tools
RUN npm install -g nodemon

CMD ["nodemon"]



