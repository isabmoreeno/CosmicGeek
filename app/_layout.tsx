import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* O Router descobre automaticamente index, login e register */}
    </Stack>
  );
}
