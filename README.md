# Hosting a Full-Stack Application

In this project, you will learn how to deploy a Full-Stack application to a cloud service provider, making it available to customers. You will use the AWS console to configure and start the necessary services, such as a database for storing product information and a web server for hosting the application. Additionally, you will modify your package.json scripts and replace hard-coded secrets with environment variables in your code.

The following steps will guide you through the deployment process:

## Step 1: Provision AWS Services

1. Provision a publicly available RDS database running Postgres in AWS. You can access the AWS RDS console [here](https://us-east-1.console.aws.amazon.com/rds/home?region=us-east-1#database:id=database-1;is-cluster=false)(The application isn't hosted at the current time).

2. Provision an S3 bucket for hosting the uploaded files. You can access the AWS S3 console [here](https://s3.console.aws.amazon.com/s3/buckets/udagram0512?region=us-east-1&tab=objects)(The application isn't hosted at the current time).

3. Export the necessary environment variables or use a package like dotenv to manage them.

## Step 2: Set up the Backend API

1. From the root directory of the project, navigate to the `udagram-api` folder using the command:
cd starter/udagram-api


2. Install the required dependencies by running:
npm install

3. Start the API in development mode by running:
npm run dev


## Step 3: Set up the Frontend

1. Without closing the terminal from the previous step, navigate to the `udagram-frontend` folder using the command:
cd starter/udagram-frontend


2. Install the required dependencies by running:
npm install

3. Start the frontend server in development mode by running:
npm run start


## Step 4: Testing

This project includes two types of tests: unit tests and end-to-end (e2e) tests. Follow these steps to run the tests:

### Unit Tests:

1. Navigate to the `udagram-frontend` folder using the command:
cd starter/udagram-frontend


2. Run the unit tests using the command:
npm run test


### End-to-End (e2e) Tests:

1. Navigate to the `udagram-frontend` folder using the command:
cd starter/udagram-frontend


2. Run the e2e tests using the command:
npm run e2e


## Application Link

You can access the deployed application using the following link: [Udagram App](http://udagram0512.s3-website-us-east-1.amazonaws.com/home) (The application isn't hosted at the current time).

Please note that the provided link may change based on the deployment setup and configuration.

Feel free to explore and interact with the application!

## Additional Notes

Make sure to replace any hard-coded secrets or sensitive information in your code with environment variables to maintain security and adhere to best practices.

## Documentation and Runbooks

As part of this project, it's important to provide documentation and runbooks covering the operations of the deployment process. These documents will serve as a guide for future developers and assist in troubleshooting any issues that may arise with the Full-Stack application.

Remember to update and maintain these documents as necessary to ensure accurate and up-to-date information.

If you have any questions or need further assistance, please feel free to ask. Happy hosting!
