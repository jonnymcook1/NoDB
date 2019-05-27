import React from 'react'
import axios from 'axios'

function Collect(props) {
    return (
        <article className= 'collect'>
          <img
            src={props.collect.image} alt={props.collect.name}>
          </img>
        <section>
          <h3>{props.collect.name}</h3>
          <h3>{props.collect.size}</h3>
            <button
              onClick={() => {
                axios
                .delete("/api/collection/" + props.collect.name).then(response => {
                props.updateCollection(response.data);
                });
              }}
            >
              Delete
            </button>
        </section>
        </article>
    )
}

export default Collect