#Base Image: node base imgage for running my react app
FROM node:20.11-alpine
#Working Direcory
WORKDIR /app
#Copy package.json file to my working directory /app
COPY package.json .
#Run the command to install all npm packages in the package.json file in the working directory /app
RUN npm install
#copy all other files to the directory
COPY /public /app/public
COPY /src /app/src
#Run npm build to get all the dependencies
RUN npm run build

#Expose your react application port 
EXPOSE 3000
# Run your application
CMD [ "npm","start" ]