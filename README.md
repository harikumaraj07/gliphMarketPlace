This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Project Setup

This project utilizes well-established libraries to provide a robust and user-friendly experience:

### React Navigation:

Chosen for its active development, comprehensive features, and large community support, ensuring a smooth navigation experience.

### React Native Elements:

Selected to streamline development by providing essential UI components (icons, theming, reusables) with minimal setup overhead.

### State Management

**Simplified Approach**: Given the application's scope, a solution like Context API or useState might be sufficient for state management. Redux, while powerful, is often unnecessary for smaller apps.

### Project Structure

Clean Organization: All application code resides within the src folder, promoting project maintainability and clarity.
**MVC Pattern**: The project adopts the MVC pattern for organization:

**Models**: Represent data fetched from APIs.
**Views**: Handle UI rendering based on model data.
**Controllers**: Facilitate user interactions and data manipulation.

### View Models for Enhanced Data Handling

**Improved Readability**: View Models are simple, well-defined types that process data from APIs.
**Data Transformation**: Raw API data is transformed into a more user-friendly format with clear property names ("formatters").
**Structured Data**: Transformed data is passed to views for rendering, improving maintainability and understanding.

### Custom Splash Screen Behavior

**Enhanced User Experience**: The default splash screen behavior is overridden to display a loading state while essential app assets are loaded, minimizing user wait time.

### Component Design Approach

**Custom Components**: Commonly used components are defined individually within the src folder, ensuring efficiency and avoiding unnecessary setup overhead.

### Interactive Video Glyphs

**Engaging Presentation**: Glyphs are represented by videos with play/pause functionality, providing a richer user experience for visual assets.

# Environment setup and running react-native application

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
