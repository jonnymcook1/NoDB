import React from 'react'
import axios from 'axios'

function Wish(props) {
    return (
        <article className= 'wish'>
          <img
            src={props.wish.image} alt={props.wish.name}>
          </img>
        <section>
          <h3>Shoe: {props.wish.name}</h3>
          <h3>Size :{props.wish.size}</h3>
            <button
              onClick={() => {
                axios
                .delete("/api/wishlist/" + props.wish.name).then(response => {
                props.updateWishlist(response.data);
                });
              }}
            >
              Delete
            </button>
        </section>
        </article>
    )
}

export default Wish