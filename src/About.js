import React from 'react'
class About extends React.Component
 {
     constructor()
     {
         super();
        //  this.state={
        //      name:'avinash',
        //      age:23
        //  }
        console.warn("hi")
     }
     componentDidMount()
     {
         console.warn("props", this.props.name)
         console.warn("did mount")
     }
     componentDidUpdate()
     {
        console.warn("props in update", this.props.name)
        // alert("name is updated")
     }
     render()
     {
         return(
             <div>
             <h1>hello this is class component</h1>
            <h2>{this.props.name}</h2>
             </div>
         )
     }
 }
 export default About;