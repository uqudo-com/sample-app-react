import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  NativeEventEmitter,
  NativeModules,
  DeviceEventEmitter,
  Platform,
} from 'react-native';
import {
  DocumentBuilder,
  DocumentType,
  EnrollmentBuilder,
  UqudoIdSDK,
  AppearanceMode,
} from 'uqudosdk-react-native';

class App extends Component {
  constructor() {
    super();
    this.sdk = new UqudoIdSDK();
    this.sdk.init();
    this.sdk.setLocale('en');
    if (Platform.OS === 'android') {
      this.eventListener = DeviceEventEmitter.addListener('TraceEvent', this.handleTraceEvent);
    } else {
      this.eventListener = new NativeEventEmitter(NativeModules.UqudoId).addListener(
        'TraceEvent',
        this.handleTraceEvent
      );
    }
  }

  componentWillUnmount() {
    this.eventListener.remove();
  }

  handleTraceEvent = (event) => {
    console.log(JSON.stringify(event));
  };

  passportEnrollment = async () => {
    try {
      const token = 'ACCESS_TOKEN_HERE';
      const doc = new DocumentBuilder()
        .setDocumentType(DocumentType.PASSPORT)
        .enableReading()
        .build();
      const enrollObject = new EnrollmentBuilder()
        .setToken(token)
        .enableFacialRecognition()
        .add(doc)
        .setAppearanceMode(AppearanceMode.DARK)
        .build();

      const { result } = await this.sdk.enroll(enrollObject);
      alert(`result = ${result}`);
    } catch (err) {
      alert(`error = ${err.code}`);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.passportEnrollment}
          title="Enroll Passport"
          color="blue"
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 20,
  },
});

export default App;
