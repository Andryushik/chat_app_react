# Chat App React & Firebase

This is a simple chat web application built using React and Firebase. The app allows users to join a chat room and communicate with other users in real-time.

## Screenshot

![Chats screenshots from Safari and Chrome](./src/assets/Screenshot.jpg)

## Demo

A live demo of the app is available [here](https://chat-app-blah-blah.netlify.app/).

## Features

- User authentication: Users can sign in and sign out securely using Firebase Google Authentication.
- Real-time messaging: Messages are delivered instantly to all connected users using Firebase Realtime Database.
- Unread messages indicators: Users can see if there unread messages.
- New messages sound notification.
- Adaptive UI. Dark and light modes.
- Emoji support
- Multiple chat rooms: Users can create and join different chat rooms using Firebase Firestore. (under construction)
- There are admin and user levels:
  User: Can send messages create and join chats,
  Administrator: All the above plus clean chat history.

## Technologies Used

- React
- Material UI
- Firebase Authentication
- Firebase Firestore

## Installation

1. Clone the repository: `git clone https://github.com/yourusername/your-repo.git`
2. Install dependencies: `npm install`
3. Create a Firebase project and enable Firebase Authentication and Firestore.
4. Add your Firebase config .env file and using variables from `src/utils/firebase.js`.
5. Start the app: `npm start`

## Structure

```graphql

chat_app_react/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Loader.js
│   │   ├── FooterBar.js
│   │   ├── MessageInput.js
│   │   ├── FadeMenu.js
│   │   └── ...
│   ├── context/
│   │   └── GlobalState.js
│   ├── hooks/
│   │   ├── useChatScroll.js
│   │   ├── useGetMessages.js
│   │   ├── useNotification.js
│   │   ├── useSignInGoogle.js
│   │   └── ...
│   ├── layouts/
│   │   └── MainLayout.js
│   ├── pages/
│   │   ├── Chat.js
│   │   ├── Home.js
│   │   └── Login.js
│   ├── utils/
│   │   ├── addMessage.js
│   │   ├── constants.js
│   │   ├── deleteChatHistory.js
│   │   ├── playNotification.js
│   │   └── firebase.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── routes.js
│   └── ...
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
