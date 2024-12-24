# Progressive Web Apps - Complete Guide
This source code is part of Maximilian Schwarzmüller's "Progressive Web Apps - Complete Guide" course on udemy.com.

# How to Use
You need [Node.js](https://nodejs.org) installed on your machine. Simply download the installer from [nodejs.org](https://nodejs.org) and go through the installation steps.

Once Node.js is installed, open your command prompt or terminal and **navigate into this project folder**. There, run `npm install` to install all required dependencies.

Finally, run `npm start` to start the development server and visit [localhost:8080](http://localhost:8080) to see the running application.

# Firebase
Install the Firebase CLI globally: `npm install -g firebase-tools`.

Visit your Firebase project (in the browser) and download your security key file (Settings => Service Accounts). Store it in the functions/ folder and adjust your code in the function to grab that file.

Make sure to enter your Firebase project id into the `.firebaserc` file - deploy your project via `firebase deploy` thereafter.