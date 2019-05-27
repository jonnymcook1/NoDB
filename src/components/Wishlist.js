import React, {Component} from 'react';
import axios from 'axios';
import Wish from './Wish'
import AddW from './AddW'

class Wishlist extends Component {
    constructor(props){
        super(props)
        this.state = {
            wishlist: [],
            loading: true,
            error: '' ,
            view: false
        }
        this.updateWishlist = this.updateWishlist.bind(this)
        this.showForm = this.showForm.bind(this)
    }
    componentDidMount() {
        axios
        .get('/api/wishlist')
        .then(response =>{
            this.setState({wishlist: response.data, loading: false})
        })
        .catch(error => {
            this.setState({loading: false, error: 'An error occurred'})
        })
    
    }

    updateWishlist(newWishlist) {
        this.setState({wishlist: newWishlist})
    }

    showForm() {
        this.setState({ view: !this.state.view})
    }

    render() {
        const {wishlist} = this.state
        return (
            <section>
                <button className={this.state.view === 'add' ? 'current' : ''}
            onClick={() => 
                this.showForm()}
            >Add
          </button>
          {this.state.view ? <AddW showForm={this.showForm} updateWishlist={this.updateWishlist}/> : null}
                {this.state.loading ? <p>Hold up...</p> : null}
                {this.state.error}
                {wishlist.map((wish, index) => ( 
                    <Wish key={index} wish={wish} updateWishlist={this.updateWishlist} />
                   ))}
            </section>
        )
    }
}

export default Wishlist