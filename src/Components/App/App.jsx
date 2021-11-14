import React, {Component} from 'react';
import './App.css';
import MainPage from '../_pages/MainPage';
import TransactionPage from '../_pages/TransactionPage';

class App extends Component {
  state = {
    activePage: 'main',
  }

  toggleActivePage = (activePage = 'main') => {
    this.setState({ activePage });
  }

  render() {
    const { activePage } = this.state;
    
    return (
      <div className="App">  
        {activePage === 'main' && <MainPage
          openActivePage={this.toggleActivePage} />}
        
        {activePage === 'costs' && <TransactionPage
          closeActivePage={this.toggleActivePage}
          transactionType={'costs'} />}

        {activePage === 'incoms' && <TransactionPage
          closeActivePage={this.toggleActivePage}
          transactionType={'incoms'} />}

        {activePage === 'balance' && <h1>Balance</h1>} 
      </div>
    );
  }
}

export default App;
