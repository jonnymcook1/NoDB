import React, {Component} from 'react';
import axios from 'axios';
import Collect from './Collect'
import AddC from './AddC'

class Collection extends Component {
    constructor(props){
        super(props)
        this.state = {
            collection: [],
            loading: true,
            error: '' ,
            view: false
        }
        this.updateCollection = this.updateCollection.bind(this)
        this.showForm = this.showForm.bind(this)
    }
    componentDidMount() {
        axios
        .get('/api/collection')
        .then(response =>{
            this.setState({collection: response.data, loading: false})
        })
        .catch(error => {
            this.setState({loading: false, error: 'An error occurred'})
        })
    
    }

    updateCollection(newCollection) {
        this.setState({collection: newCollection})
    }
    
    showForm() {
        this.setState({ view: !this.state.view})
    }

    render() {
        const {collection} = this.state
        return (
            <section>
        
         <button className={this.state.view === 'add' ? 'current' : ''}
            onClick={() => 
                this.showForm()}
            >Add
          </button>
          {this.state.view ? <AddC showForm={this.showForm} updateCollection={this.updateCollection}/> : null}
                {this.state.loading ? <p>Hold up...</p> : null}
                {this.state.error}
                {collection.map((collect, index) => ( 
                    <Collect key={index} collect={collect} updateCollection={this.updateCollection} />
                   ))}
            </section>
        )
    }
}

export default Collection