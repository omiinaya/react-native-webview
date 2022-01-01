import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <WebView
        scalesPageToFit={true}
        automaticallyAdjustContentInsets={true}
        scrollEnabled={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: 'https://servantapp.herokuapp.com/' }}
      />
    );
  }
}

export default MyWeb;
