import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Video
          source={require('../assets/vedio.mp4')}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={"cover"}
          repeat
          style={styles.video}
        />

        <View style={styles.content}>
          <Text style={styles.text}>Hello</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('App', () => App);