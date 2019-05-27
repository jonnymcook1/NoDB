import  React, {Component} from 'react';
import './App.css';
import Wishlist from "./components/Wishlist"
import Collection from './components/Collection'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'collection',
  
    }
    this.changeView = this.changeView.bind(this)

  }

  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {

    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
        <header>
          <h1>
            <img src={require('./Sneaker.jpg')} alt="Sneakers"/>
          </h1>
          <h2 className='logo'>SNEAK PEEK</h2>
        </header>
        <nav>
          <button className={this.state.view === 'collection' ? 'current' : ''}
          onClick={() => this.setState({view: 'collection'})}>Collection</button>

          <button className={this.state.view === "wishlist" ? "current" : ""}
            onClick={() => this.setState({ view: "wishlist" })}
            >Wishlist
          </button>
        </nav>
        {this.state.view === 'wishlist' ? (
          <Wishlist/>
        ) : 
            <Collection/>
        }
         
       
      </div>

    )
  }
}

export default App;
