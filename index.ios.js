'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  CameraRoll
} from 'react-native';
import Camera from 'react-native-camera';

class karaoke extends Component {
  handleSubmit() {
    return
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableHighlight onPressIn={this.record.bind(this)} onPressOut={this.stopRecording.bind(this)} >
                    <Text style={{color: 'blue'}} >Take Picture</Text>
          </TouchableHighlight>
        </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
  record() {
    console.log('record');
    this.camera.capture({audio: true,
                           mode: Camera.constants.CaptureMode.video,
                           target: Camera.constants.CaptureTarget.cameraRoll
                          }, function(err, data) {
      console.log(err, data);
    });

  }

  stopRecording() {
    console.log('pause');
    this.camera.stopCapture()
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('karaoke', () => karaoke);
