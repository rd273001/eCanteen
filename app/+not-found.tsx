import React from 'react';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Title } from 'react-native-paper';

const NotFoundScreen: React.FC = () => {
  return (
    <>
      <Stack.Screen options={ { title: 'Oops! Not Found' } } />
      <View style={ styles.container }>
        <Title>This screen doesn't exist.</Title>
        <Link href='/' style={ styles.link }>
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
} );

export default NotFoundScreen;