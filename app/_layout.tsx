import React from 'react';
import { Slot } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

const RootLayout: React.FC = () => {
  return (
    <PaperProvider>
      <Slot />
    </PaperProvider>
  );
};

export default RootLayout;