import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';

export default class Tombol extends Component {
  _onPressButton() {
    alert('anda meneken tombol!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title="Press Me" />
        </View>

        <View style={styles.alternativeLayoutButtonContainer}>
          <Button onPress={this._onPressButton} title="this looks great!" />
          <Button onPress={this._onPressButton} title="OK!" color="#841584" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
