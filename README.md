## 1. Core Knowledge:

    NOTABLE:
        - <View> and <Text> components don't have the same styling properties
        - To work with Shadow:
            +, shadow properties only applied to IOS
            +, elevation property only Appy to Android

    PACKAGES:
        $ expo install expo-app-loading
        $ npm install --save expo-font

## 2. Module Notes:

1.  2nd Commit: Custom components

        - See App.js
        - ./components/Header.js
        - ./screens/StartGameScreen.js

2.  3rd Commit: Styling Custom Card Component

        - See ./components/Card.js:
            +, See shadow and elevation property in ./components/Card.js
            +, See how to use styling props

        - See ./screens/StartGameScreen.js to see:
            +, How to use Card as a wrapper
            +, How to pass styling into Card

3.  4th Commit: Color theming with constants:
    (Video 60)

            - See ./constants/colors.js for export
            - Header.js and StartGameScreen.js for import

4.  5th Commit: Configuring / Passing Input Props

            - See ./screens/StartGameScreen.js to see different
                props that can be passed, see API docs for more info
            - See ./components/Input.js to see how to pass config props

5.  6th Commit: Cleaning User Input:

            - See ./screens/StartGameScreen.js
                +, Look for KeyBoard. This is not a component, it is an API
                +, See the props in Input
            - See TouchableWithoutFeedback, This component with its onPress
                props allow user to close keyboard by clicking white space
                (after hit the input > keyboard opened)
                > This improve User Experience

6.  7th Commit: Alert Modal Box, Reset and Confirm Input

            - In ./screens/StartGameScreen.js:
                +, See Alert for Alert Modal Box
                +, See confirmInputHandler() and resetInputHandler()
                    for Reset and Confirm Input

7.  8th Commit: Additional Game Logics  
    (Video 65 - 69)

            - This Commit includes:
                +, Adding Random Number Generation
                +, Switching Between multiple screens
                +, Addming Game Features: Hints & Validation
                +, Implement Winning Logic

            - See App.js and screens in ./screens/

8.  9th Commit: Custom Fonts and AppLoading

            - See code in App.js
            - Custom Font in this module is not working
            - AppLoading is the expo component that allow the app
            to run async code before render any View

9.  10th, 11st Commit: Working with local and network Image

            - See code in GameOverScreen.js
            - See the styling of:
                +, imageContainer
                +, image
            - See 10th Commit for local image, 11st for network image

10. 12nd Commit: How <Text> Work:

            - See code in GameOverScreen.js:
                +, Notice the use of <Text> in <BodyText>
                +, Text can contain Text and doesn't have flexbox style applied
                +, See video 78, docs 79 for more information

11. 13rd Commit: Custom Button, Working with Icons and Fixed Font

            - Custom Button:
                +, Video 80
                +, See ./components/MainButton.js
                +, Search 'MainButton' in StartGameScreen, GameOverScreen and GameScreen.js

            - Working with Icons:
                +, Video 81
                +, In GameScreen.js
                    > Search for Ionicons
                +, See this link (1, 2) in 3. Useful Resources and Links for guide

            - Working with Fonts:
                +, Run $ expo upgrade
                +, See 9th Commit for guide

## 3. Summary:

Up until this point, we already covered these basic components for
React Native:

        - View: Container & Layout Component
        - Text: Output Text, Control Text Style
        - TextInput: Receive User Input (via Soft Keyboard)
        - Button: Platform adaptive Button
        - FlatList: Performance optimized Scrollable List
        - ScrollView: non-optimized Scrollable View / Container
        - Image: Output Local or Network Images
        - Stylesheet: Validated, Potentially Optimized Style Config

All of these you can see the code in 2 links down below:

        - Basic Repo:
        https://github.com/Trung28899/ReactNative-Basic-And-Debug

        - Advanced Basic Repo:
        https://github.com/Trung28899/ReactNative-Advanced-Basic

## 4. Useful Resources and Links:

(1). Using Expo Icons:
https://docs.expo.io/guides/icons/#expovector-icons

(2). Expo Icon Search Directory:
https://icons.expo.fyi/
