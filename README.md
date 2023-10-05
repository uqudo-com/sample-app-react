# Uqudo SDK React Native Demo Sample App

This project is a sample React Native application that demonstrates the usage of the Uqudo SDK for passport onboarding with facial recognition.

## Prerequisites

Before you begin, ensure you have the following prerequisites in place:

- React Native installed on your development machine.
- Web Storm or VS Code with the React Native extension.
- Knowledge of JavaScript or TypeScript programming language.

## Setup and Installation

1. Clone the project from the repository.

    ```sh
    git clone https://github.com/uqudo-com/sample-app-react.git
    cd UqudoSDKReactNativeSample 
    npm install
    cd ios && pod install && cd ..
    ```

2. Open the project in your preferred React Native development environment.

3. Replace the `ACCESS_TOKEN_HERE` placeholder with the actual access token in the `App` class inside `App.js` file.

    ```jsx
    let token = 'ACCESS_TOKEN_HERE';
    ```

## Running the app

1. Use a physical device to run the app.

2. Run the following command in the terminal to build and run the application:

    ```sh
    npx react-native run-android
    # or
    npx react-native run-ios
    ```

## Features

- Passport onboarding
- Facial recognition
- Handling Enrollment results

## How it works

1. The `UqudoIdSDK.init()` method is called in the `constructor` to initialize the Uqudo SDK.

2. When the "Enroll Passport" button is clicked, the `passportEnrollment()` method is invoked to begin the onboarding process.

3. The `NativeEventEmitter` listens to native events and logs trace events to console.

## Notes

- Customize the project according to your needs and refer to the [official Uqudo SDK documentation](http://docs.uqudo.com/docs/) for more details and configurations.
- Ensure that you have the necessary Uqudo SDK packages included in your `package.json` file.
- Replace the `ACCESS_TOKEN_HERE` with your actual access token for the Uqudo SDK.
- Make sure to handle errors and edge cases as needed for your specific use case.
