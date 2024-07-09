# verbose-carnival

The project, named "verbose-carnival," is designed to enhance the streaming experience on OBS (Open Broadcaster Software) by providing a variety of customizable screens and an embedded web view for control within OBS. It is built using web technologies, including React for the frontend and OBSWebSocket for communication with OBS.

Key features and functionalities include:

- Customizable Screens: The project includes several predefined screens for different streaming scenarios, such as countdowns, "Be Right Back" messages, and more. These screens are accessible via specific routes and can be displayed in OBS.
- Embedded Web View for Control: It offers an embedded web view that can be added to OBS as a "Custom Browser Dock," allowing streamers to control and switch between different screens directly from OBS.
- OBS Integration: Through the use of obs-websocket-js, the project integrates closely with OBS, enabling features like broadcasting custom events and controlling scene items (e.g., enabling/disabling camera sources).
- Environment Configuration: The project utilizes environment variables for configuration, such as OBS connection details (OBS_URL, OBS_PASSWORD) and the camera source (CAMERA_SOURCE), ensuring flexibility and security.
- React and TypeScript: Built with React and TypeScript, the project structure includes components for each screen, custom hooks for OBS events, and styling with CSS modules.

Overall, "verbose-carnival" aims to provide a seamless and customizable streaming experience for OBS users, with easy setup and integration.

## Project Structure

The project's codebase is organized into several directories, with the main application logic residing in the src directory, which includes React components (.tsx files), custom hooks (e.g., useObsCustomEvent.tsx), and styling (.css and .module.css files). The public directory contains static assets like fonts.

## Running the project

To run the project, you need to have [Node.js](https://nodejs.org/en/) installed. Then, you can run the following commands:

```bash
npm install
npm run dev
```

This will start the project and display the URL where you can access it.

## Using the project

The project has a set of routes that you can access to display different screens. The screens are:

- `/`: A default screen with a simple message.
- `/countdown`: A screen with a countdown timer.
- `/brb`: A screen with a "Be Right Back" message.
- `/initializing`: A screen with an "Initializing" message.
- `/ending`: A screen with an "Ending" message.
- `/lunch`: A screen with a "Lunch" message.
- `/dock`: A screen that you can add to OBS as a "Custom Browser Dock".
