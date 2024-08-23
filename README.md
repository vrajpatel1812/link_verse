# Linkverse

Linkverse is a social media platform designed to allow users to connect, share, and interact with others. It provides a comprehensive set of features that make social networking easy, fun, and engaging. The platform offers a user-friendly interface with various functionalities like posting content, liking and commenting.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **User Authentication**: Secure login and registration using JWT tokens.
- **User Profiles**: Create and customize your profile with bio, profile picture, and other personal details.
- **Post Management**: Create, edit, and delete posts. Users can upload images, write captions, and tag others.
- **Interactions**: Like, comment, and share posts. Follow and unfollow other users.
- **Explore Page**: Discover trending content, suggested users to follow, and hashtags.
- **Responsive Design**: Fully responsive layout that works across different devices (desktop, tablet, and mobile).

## Technology Stack

- **Frontend**: React.js, Redux, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Prerequisites

Ensure you have the following software installed on your machine:

- **Node.js** (v14.x or higher) - [Download Node.js](https://nodejs.org/)
- **MongoDB** (v4.x or higher) - Using MongoDB Atlas
- **npm** (v6.x or higher) - Installed with Node.js

## Installation

To set up the Linkverse application locally, follow these steps:

### 1. Clone the Repository

First, clone the repository from GitHub to your local machine:

```bash
git clone https://github.com/vrajpatel1812/linkverse.git
cd linkverse
```

### 2. Install Dependencies

Next, install all the required dependencies by running:

```bash
cd client
npm install
```

```bash
cd server
npm install
```

### 3. Set Up Environment Variables in server

Create a `.env` file in the server directory of the project and configure the following environment variables:

```bash
# Database Configuration
MONGO_URI=your_mongodb_connection_string

# JWT Secret for Authentication
JWT_SECRET=your_jwt_secret_key

# Server Port
PORT=3000
```

Replace `your_mongodb_connection_string`,  and `your_jwt_secret_key` with your actual MongoDB connection string and JWT secret key respectively.

## Running the Application

To start the application in development mode:

```bash
cd client
npm run dev
```

This will start the client, and the application will be accessible at `http://localhost:5173`.

```bash
cd server
npm start
```

This will start the client, and the application will be accessible at `http://localhost:3000`.

To build and run the application in production mode:

```bash
cd client
npm run build
npm start
```

The application will be running on the specified port, ready to be used.

## Screenshots

Below are some screenshots of the Linkverse platform:

### Home Page
![image](https://github.com/user-attachments/assets/ac888e95-1bdc-4d7c-b3ab-6be282731f9c)
- **Description**: The home page where users can view posts from people they follow. It displays a timeline with options to like, comment, and share posts.

### User Profile
![image](https://github.com/user-attachments/assets/d317af11-2955-4222-b160-060c0c612ba0)
- **Description**: The user profile page allows users to view and edit their personal information, such as profile picture, bio, and posts.

### Explore Page
![image](https://github.com/user-attachments/assets/6efec20b-b86e-4a88-8748-fd588cbebb92)
- **Description**: The explore page showcases trending posts, popular users, and suggested content based on user interests.

## Usage

- **Registration**: New users can sign up by providing basic information such as username, email, and password.
- **Posting Content**: Users can create posts by writing captions, uploading images, and tagging other users.
- **Engaging with Posts**: Users can like, comment on, and share posts within their network.
- **Exploring Content**: Users can explore new content, search for posts or users, and follow others.

## Contributing

If you would like to contribute to Linkverse, please follow these steps:

1. **Fork the repository** to your GitHub account.
2. **Clone the forked repository** to your local machine.
3. Create a new branch for your feature or bugfix.
4. **Make your changes** and commit them with a descriptive message.
5. **Push your changes** to the branch on your fork.
6. Open a **pull request** on the original repository and provide details about your changes.

All contributions are welcome, whether it's improving documentation, adding new features, or fixing bugs.

## Contact

If you have any questions, issues, or suggestions regarding Linkverse, feel free to reach out:

- **Email**: vrajp771@gmail.com
- **GitHub**: [vrajpatel1812](https://github.com/vrajpatel1812)
