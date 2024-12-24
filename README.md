git clone <repository-url>
cd social-media-application

cd api
npm install

cd client
npm install

DB_HOST=localhost
DB_USER=<your-database-username>
DB_PASSWORD=<your-database-password>
DB_NAME=<your-database-name>
JWT_SECRET=<your-secret-key>
PORT=8000

cd api
npm start

cd client
npm start

social-media-application/
├── api/                 # Backend code
├── client/              # Frontend code
├── README.md            # Project documentation
