FROM node
LABEL maintainer "duberly.mondragon@tecsup.edu.pe"
RUN git clone -q https://github.com/DuberlyIvanMondragonManchay/dMondragonApp
WORKDIR /dMondragonApp
RUN npm install > /dev/null
EXPOSE 5000
CMD ["npm","start"]