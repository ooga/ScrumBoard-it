import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './App.css';

import ConfigSteps from './container/ConfigSteps';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="full-height">
          <AppBar title="ScrumBoard-it" showMenuIconButton={false} className="no-print"/>
          <div className="center">
            <ConfigSteps />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
