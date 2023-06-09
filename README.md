# React Native Base Template

## Navigation & Redux Toolkit

This template provides a basic structure for a React Native application with drawer navigation, a predefined folder structure, base icons, fonts, and Redux integration.

## Features

- Drawer navigation using React Navigation.
- Predefined folder structure for better organization of code.
- Base icons and fonts included for easy customization.
- Redux integration for state management.

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/umerf21/react-native-template
   ```

2. Install dependencies:

   ```
   cd repo
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

4. Run the app on Android or iOS:
   ```
   npm run android
   npm run ios
   ```

## Folder Structure

```
src/
  ├── assets/
  │     ├── fonts/              # Custom fonts
  │     └── icons/              # Custom icons
  ├── components/               # Reusable components
  ├── navigator/                # Navigation configuration
  │     ├── DrawerNavigator.js  # Drawer navigation setup
  │     └── ...
  ├── screens/                  # App screens
  │     ├── HomeScreen.js       # Example screen
  │     └── ...
  ├── shared/
  │     ├── constants/          # Constants
  │     ├── hooks/              # Custom hooks
  │     └── utils/              # Utility functions
  ├── store/                    # Redux store setup
  │     ├── actions/            # Redux actions
  │     ├── reducers/           # Redux reducers
  │     ├── store.js            # Store configuration
  │     └── ...
  ├── theme/
  │     ├── AppStyles.ts/          # Reusable styles
  │     ├── Color.ts/              # App theme color
  │     ├── Fonts.ts/              # Fonts size
  │     ├── Images.ts/             # Image import
  │     └── Metrics.ts/            # Responsive Functions
  └── ...
```

## Customization

- To modify the drawer navigation, edit the `DrawerNavigator.js` file in the `navigation` folder.
- Add or customize screens in the `screens` folder.
- Update Redux actions and reducers in the `store` folder to manage application state.
- Replace fonts and icons in the `assets` folder with your own custom resources.

## Dependencies

- React Native
- React Navigation
- Redux
- Redux Toolkit

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## Credits

This template was created by Syed Umer Faheem.
