import { Slot } from 'expo-router';

export default function RootLayout() {
  return <Slot />;
}
// This layout file is used to wrap all the screens in the app with a common layout. It can be used to set up global styles, navigation, and other common functionality. The Slot component is used to render the current screen within the layout.
// The Slot component is a placeholder that will be replaced with the current screen when the app is running. This allows for a consistent layout across all screens in the app. The layout file can also be used to set up navigation, such as tab navigation or stack navigation, and to provide a common header or footer for all screens.