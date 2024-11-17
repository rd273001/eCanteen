import React from 'react';
import { HEIGHT, WIDTH } from '@/constants/dimensions';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Colors from '@/constants/Colors';

const Home: React.FC = () => {

  const loginAsAdmin = () => {
    // To DO
  };

  const loginAsStudent = () => {
    // TO DO
  };

  return (
    <View style={ styles.container }>
      <Image
        source={ require( '../assets/images/ecanteen-logo.png' ) }
        resizeMode='contain'
        style={ { width: WIDTH * 0.6, height: WIDTH * 0.6 } }
      />

      <Text variant='headlineMedium'>E-Canteen Facility</Text>

      <View style={ styles.buttonContainer }>
        <Button mode='contained' style={ styles.button } onPress={ loginAsAdmin }>
          Login as Admin
        </Button>

        <Button mode='contained' style={ styles.button } onPress={ loginAsStudent }>
          Login as Student
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: WIDTH * 0.03,
    backgroundColor: Colors.BACKGROUND
  },
  buttonContainer: {
    marginTop: HEIGHT * 0.05,
    gap: HEIGHT * 0.02,
  },
  button: {
    minWidth: WIDTH * 0.4,
    paddingHorizontal: WIDTH * 0.05,
    backgroundColor: Colors.BUTTON_BACKGROUND,
    color: 'green'
  }
} );

export default Home;