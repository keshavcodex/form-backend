# Node.js Form App

This README provides instructions on how to set up and use a Node.js application that handles form submissions. The application receives form data from clients, processes it, and stores it in a database. It also provides a simple interface to view the submitted form data.

## Features

The Node.js Form App offers the following features:

1. **Form Submission**: It allows clients to submit form data.
2. **Data Storage**: It stores the submitted form data in a database.
3. **Data Viewing**: It provides an interface to view the submitted form data.

## Prerequisites

To successfully set up and run the Node.js Form App, ensure you have the following installed on your machine:

- Node.js: You can download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org)
- MongoDB: Install MongoDB locally or use a cloud-based MongoDB service.

## Installation

To install and set up the Node.js Form App, follow these steps:

1. Clone the repository from GitHub:
   ```shell
   git clone https://github.com/keshavcodex/form-backend.git
   ```

2. Change into the project directory:
   ```shell
   cd node-form-app
   ```

3. Install the required dependencies:
   ```shell
   npm install
   ```

## Configuration

To connect the Node.js Form App to your MongoDB database, update the configuration settings:

1. Create a `.env` file in the root directory of the project.
2. Add the following configuration variables to the `.env` file:
   ```plaintext
   MONGODB_URI=your-mongodb-uri
   PORT=your-port
   ```

## Usage

1. Start the Node.js Form App:
   ```shell
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:5000` to access the application.
3. 5000 might not be your port

## Contributing

Contributions to this Node.js Form App are welcome. If you find any bugs, have feature requests, or want to contribute enhancements, please submit issues and pull requests to the GitHub repository.

## License

This Node.js Form App is open-source and distributed under the [MIT License](https://opensource.org/licenses/MIT).