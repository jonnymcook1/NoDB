import React, {Component} from 'react'
import axios from 'axios'

class AddW extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            image: '',
            size: ''
        
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    
    }
    render() {
        return(
            <form
                onSubmit={e => {
                    e.preventDefault()
                    axios
                    .post('/api/wishlist', {
                        name: this.state.name,
                        image: this.state.image,
                        size: this.state.size
                    })
                    .then(response => {
                        console.log(response.data)
                        this.props.updateWishlist(response.data)
                        this.props.showForm()
                    })
                    .catch(error => {
                        console.log(error)
                    })
                }}
                onReset={e => {
                    e.preventDefault()
                  this.props.showForm()
                }
                
                }
                >
                 <input name='name' onChange={this.handleChange} placeholder='Name' />
                 <input name='image' onChange={this.handleChange} placeholder='Image'/>
                 <br/>
                 <input name='size' onChange={this.handleChange} placeholder='Size' />
                 <button type='reset'>Cancel</button>
                 <button type='submit'>Submit</button>
            </form>
        )
    }
}
export default AddW