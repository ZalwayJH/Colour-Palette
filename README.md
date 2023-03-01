# Colour-palette App

Colour-palette is an android app solo project based on a colour and scheme API from TheColorApi.com, created using npx create-expo-app.

:eye_speech_bubble: Here is a video demonstration of the app and its features:

[Colour-Palette](https://www.youtube.com/watch?v=FPEjf9Da7dk)

## You can find TheColorApi.com here

[TheColorApi.com](https://www.thecolorapi.com/)

## About

I set out on this project to deepen my understanding of react native, app development, new libraries and to create a simple, accessible and useful app for people to quickly find colour schemes for their own projects.
The app is divided into 3 main parts, the colour card, the control bar and the colour picker.
The colour picker provides a preview for the user to find a colour they like, once they press "Apply" the hex code for that colour is sent to the API and all of the other associated information with that colour is retrieved. This information includes the the rgb, cymk and hsv values for the selected colour. In Scheme mode the API handles the hex value by sending the scheme connected with that colour including all the same information as in colour mode.

The user can find a colour they like using the colour picker and press the "Apply" button to get the name of that colour as well as the associated hex value, they can also change from "Colour" mode to "Scheme" mode with the center button in the control bar to find a scheme that includes their selected colour. If a user wishes to go back to a previously selected colour than can do by simply pressing the Previous button which retrieves a local cache. By opening the options button on the right the user can change the type of scheme they would like to see, these include Monochrome, Analogic, Complement and Analogic Complement. The user can select any of the colour cards to view and copy any of the additional information to their clipboard.

If a user has a hex code they can use the Search feature to look up that specific colour and its schemes.
There is also a Roll the Dice button so if the user doesn't have a particular colour in mind they can quickly flick through any number of randomly generated hex values until they find one that suits their tastes and needs.

Lastly the user can save a single colour or an entire scheme to their phones gallery by pressing the save button and selected "Save to Gallery".

#### Features

- Android mobile app design
- View and filter colours and schemes by hex codes
- Sort schemes by type
- Search using hex codes
- Save a image of the colour/scheme locally to their phones gallery
- View more detailed information about colours and copy them to the clipboard
- See previously selected colours

#### Technologies

- [React](https://reactjs.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Reanimated-Colour-picker](https://alabsi91.github.io/reanimated-color-picker/docs/intro/)
- [react-native-view-shot](https://github.com/gre/react-native-view-shot)
- [Expo-Media-Library](https://docs.expo.dev/versions/latest/sdk/media-library/)
- [React Native Modal](https://github.com/react-native-modal/react-native-modal)
- [The Color API](https://www.thecolorapi.com/)

### Installation

Firstly, make sure you have Node.js installed.

Clone this repository on your local machine

```

git clone https://github.com/ZalwayJH/Colour-Palette.git
```

Navigate into the repository

```

cd colour-palette
```

Install dependencies

```

npm install
```

Start the application to run on your device using expo

```

npx expo start --tunnel
```

Built with Node Version:
v18.7.0

React Version:
v9.2.1
