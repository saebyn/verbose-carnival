# verbose-carnival

This is a simple project to provide views for screens in OBS and to provide an embedded web view to control it from OBS.

## Running the project

To run the project, you need to have [Node.js](https://nodejs.org/en/) installed. Then, you can run the following commands:

```bash
npm install
npm start
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
