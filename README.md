# Daldart Assignment

# Description

In this project, I utilized various technologies to create a web application that fetches data from Reddit's API, stores it in Firebase, and displays the posts with pagination. Below is a detailed overview of the technologies used and the features implemented.

# Technologies Used
Backend ==> 

Node.js
Express.js
TypeScript

Frontend ==>

Next.js
TypeScript
Tailwind CSS

# Project Overview

Backend ==>

I implemented a Node.js and Express.js backend server using TypeScript. The server acts as an intermediary between the Reddit API and the frontend. It exposes a custom API endpoint that fetches data from Reddit, processes it, and stores it in Firebase Firestore and integration tests.

Frontend ==>

The frontend is built with Next.js, utilizing TypeScript for enhanced type safety and Tailwind CSS for styling. The UI consists of a navigation bar with links for 'New,' 'Hot,' and 'Rising' categories. The UI is responsive and user-friendly. The posts are displayed in a paginated manner with a default limit of 8 per page. Users can navigate to the next and previous pages to load additional posts.

# Extra Features

Search Functionality: Implemented a search bar to filter posts based on the title.
Scroll to Top: Added a 'Scroll to Top' button for a smooth scrolling experience.

# Global State Management
I used React Context to manage global states across components. Three contexts were created:

Global Status: Manages loading state globally.
Posts Categories: Manages the selected posts category globally.
Posts: Manages currently fetched posts for Navbar component and search functionality.

# Usage
Clone the repository.
Install dependencies using npm install.
Run the backend server with npm run start in the 'server' directory.
Test the backend server with npm test in the 'server' directory.
Run the frontend with npm run dev in the 'client' directory.