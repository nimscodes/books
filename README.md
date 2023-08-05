# Books

## Overview

Books is a React application that serves as a digital reading list for users. It provides features for adding, editing, and deleting books. This application maintains persistent data with JSON server and ensures state management across app components through React's Context API. HTTP requests are made possible through Axios, and the useCallback hook is used to prevent unnecessary re-renders and infinite state updates.

## Features

- **Add Books**: Users can add books to their reading list, providing necessary details.
- **Edit Books**: Users can edit the details of the books already added to their reading list.
- **Delete Books**: Users can remove books from their reading list.
- **Persistent Data**: The application uses a JSON server for a full-fledged REST API, which allows data persistence.
- **State Management**: The application uses the Context API for state management, allowing data to be shared across the entire component tree.

## Technologies Used

- React.js
- JSON server
- Axios
- Context API

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repo

```bash
git clone https://github.com/nimscodes/books.git
```

2. Install NPM packages

```bash
npm install
```

3. Run the client side

```bash
npm start
```

The client side runs on http://localhost:3000 by default.

4. Run the server side on a separate terminal

```bash
npm run server
```

The server side runs on http://localhost:3001 by default.


## Contributing
Contributions are always welcome!

## License
Distributed under the MIT License. See LICENSE for more information.
