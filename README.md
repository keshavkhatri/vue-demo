# Modern College Portal (Vue 3 + Vite + Tailwind)

## Project Overview

This is a modern, responsive college portal web application built with Vue 3, Vite, Tailwind CSS, and Flowbite. It provides a beautiful and user-friendly interface for students and faculty to:

- Register and log in
- View and manage courses
- Browse faculty directory
- Check announcements and events
- Send and receive messages
- Edit user profiles

All UI pages have been upgraded for a contemporary look and smooth user experience.

## Features

- Modern dashboard and navigation
- Announcements, events, and messages with vibrant card layouts
- Course and faculty directory with images and details
- Registration and login with role selection
- Profile editing
- Responsive design for desktop and mobile

## Tech Stack

- **Vue 3**
- **Vite** (dev server & build tool)
- **Tailwind CSS** (utility-first styling)
- **Flowbite** (UI components)
- **Vue Router**

## Prerequisites

- **Node.js**: v18.x or newer recommended
- **npm**: v9.x or newer

## Setup Instructions

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```sh
git clone https://github.com/keshavkhatri/vue-demo.git
cd vue-demo
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Run the Development Server

```sh
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

### 4. Build for Production

```sh
npm run build
```

### 5. Preview Production Build

```sh
npm run preview
```

## Folder Structure

- `src/` - Main source code
	- `views/` - Page components (Dashboard, Login/Register, Courses, Events, etc.)
	- `assets/` - Images and mock database JSON files
	- `router/` - Vue Router setup
	- `style.css` - Global styles (Tailwind + Flowbite)
- `public/` - Static assets
- `index.html` - Main HTML file
- `package.json` - Project metadata and scripts
- `vite.config.js` - Vite configuration

## Customization

- You can update mock data in `src/assets/db/*.json` for announcements, courses, events, faculty, messages, and users.
- UI components can be customized in `src/views/`.

## License

This project is licensed under the MIT License. See `LICENSE.md` for details.

## Credits

- Inspired by Flowbite Vue Starter and enhanced for a college portal use case.

---

For any issues or contributions, please open an issue or pull request on [GitHub](https://github.com/keshavkhatri/vue-demo).
