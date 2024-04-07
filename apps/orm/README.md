## Setup

1. `cp .env.example .env`
1. Setup of Monog DB Local
   docker run --name mongodb -d -p 27018:27017 -v /Users/yourusername/mongodb-data:/data/db mongo
1. Mongo GUI compass
   https://www.mongodb.com/try/download/compass
1. local docker image
   https://hub.docker.com/_/mongo
1. Mongo DB CompassGUI
   mongodb://root:example@localhost:27017/?authSource=admin
1. Mongo Express
   http://0.0.0.0:8081/db/admin/
1. Generate Prisma
   npx prisma generate
