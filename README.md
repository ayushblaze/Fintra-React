
# Fintra - An Expense Tracker

An expense tracker made using ReactJS which makes heavy use of firebase for authentication and firestore to store the user data.




## Features

- [x] Login
- [x] Signup
- [x] Hooks: 
      - useAuthContext - Handling authentication (checking if the user is already logged in then the page first loads).
      - useFirebase - All of the Firebase services are initialized inside this hook.
      - useCollection - Access different collections in Firestore DB (accepts a collection name).
      - useLogin
      - useSignup
      - useLogout
- [x] Add Transaction
- [x] Delete Transaction
- [x] Transactions are always ordered by the date they were created on (Descending)
- [x] Access Control (Transactions are only visible to the creator)
- [x] Session Management (Session management involves creating and maintaining a unique session identifier for each user, which is used to keep track of their session state and activity)


## Screenshots

#### Signup page
![signup page](https://i.ibb.co/Xyr9bNH/screencapture-ayushblaze-fintra-netlify-app-signup-2023-04-04-16-13-42.png)

#### Login page
![login page](https://i.ibb.co/2YJnrCQ/screencapture-ayushblaze-fintra-netlify-app-login-2023-04-04-16-13-50.png)

#### Home page (After Signup/Login)
![home page](https://i.ibb.co/HzZjc6C/screencapture-ayushblaze-fintra-netlify-app-2023-04-04-16-14-54.png)

#### Adding a Transaction
![adding transaction](https://i.ibb.co/QNQg2tg/screencapture-ayushblaze-fintra-netlify-app-2023-04-04-16-28-09.png)
![adding transaction](https://i.ibb.co/TmPxLLF/screencapture-ayushblaze-fintra-netlify-app-2023-04-04-16-28-21.png)


## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**
