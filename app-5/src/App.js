import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image'
import { render } from '@testing-library/react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Image url={'https://http.cat/409'}/>
      </div>
    )
  }
}

export default App;
