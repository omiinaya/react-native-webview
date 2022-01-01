import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  constructor(props) {
    super(props);
    
  }
  webView = {
    canGoBack: false,
    ref: null,
  };
  onShouldStartLoadWithRequest = (navigator) => {
    
    this.webView.ref.stopLoading();
    return false;

};
  render() {
    return (
      <WebView
        scalesPageToFit={true}
        automaticallyAdjustContentInsets={true}
        scrollEnabled={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: 'https://servantapp.herokuapp.com/' }}
        ref={(webView) => {
          this.webView.ref = webView;
        }}
        onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
      />
    );
  }
}

export default MyWeb;
