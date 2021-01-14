import React, { Component } from 'react';
class Extras extends Component {
  render() {

    if(this.props.data){
      var Extras = this.props.data.Extras.map(function(Extras){
        return  <li key={Extras.user}>
            <blockquote>
               <p>{Extras.text}</p>
               <cite>{Extras.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="Extras">

      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Extras</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {Extras}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Extras;
