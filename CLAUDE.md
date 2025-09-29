# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a React Native Windows application using TypeScript, created with `@react-native-community/cli`. The project supports cross-platform development for Android, iOS, and Windows platforms.

## Development Commands

### Starting Development
- `npm start` - Start Metro bundler
- `npm run android` - Build and run on Android
- `npm run ios` - Build and run on iOS (requires CocoaPods setup)
- `npm run windows` - Build and run on Windows

### Testing
- `npm test` - Run standard Jest tests
- `npm run test:windows` - Run Windows-specific tests using @rnx-kit/jest-preset

### Code Quality
- `npm run lint` - Run ESLint using @react-native/eslint-config

## Architecture

### Cross-Platform Structure
- **App.tsx** - Main application component with cross-platform React Native code
- **index.js** - Application entry point
- **android/** - Android-specific native code and configuration
- **ios/** - iOS-specific native code and configuration  
- **windows/** - Windows-specific native code (C++/XAML) and configuration

### Windows Platform Specifics
- Uses C++ application template with XAML UI
- Windows project is located in `windows/DemoRnWin/`
- Includes Visual Studio solution file (`DemoRnWin.sln`)
- Windows-specific tests use `@rnx-kit/jest-preset` instead of standard React Native preset

### Configuration Files
- **tsconfig.json** - Extends @react-native/typescript-config
- **jest.config.js** - Standard React Native Jest preset
- **jest.config.windows.js** - Windows-specific Jest configuration
- **babel.config.js** - React Native Babel configuration
- **.eslintrc.js** - Extends @react-native ESLint config

## iOS Development Setup
For iOS development, install CocoaPods dependencies:
```bash
bundle install
bundle exec pod install
```

## Platform-Specific Testing
The project has separate Jest configurations for different platforms. Use `npm run test:windows` for Windows-specific testing scenarios.