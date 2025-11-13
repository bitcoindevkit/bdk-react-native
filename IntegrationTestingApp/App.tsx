/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Network } from 'bdk-rn';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const network = Network.Signet;
  const networkName = Network[network]; // Gets the string name from the enum

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello, World!
      </Text>
      <Text style={styles.networkText}>
        Current network: {networkName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  },
  networkText: {
    fontSize: 18,
    marginTop: 20,
    color: '#666',
  },
});

export default App;
