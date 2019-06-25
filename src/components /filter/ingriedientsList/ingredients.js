import React, { Component } from "react";

class IngredientsList extends Component {
  constructor(props) {
      super(props)
    this.state = {
        ingText: '',
        ingArray: []

    };
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }
  componentDidMount(){
    

  }
  onChange(evt){
    
    const ingText = evt.target.value;
    this.setState({
        ingText
    })
}
onSubmit(evt){
    evt.value = ''
   let ingArrayCopy = this.state.ingArray
    ingArrayCopy.push(this.state.ingText)
    evt.preventDefault()
    this.setState({
        ingArray: ingArrayCopy,
        ingText: ''
    })
}

  render() {
    return (
        <div>
        <h3>My Ingredients:</h3>
         <form onChange={this.onChange}
                onSubmit={this.onSubmit}
            >
            <input
            type="textarea"
            name="ingText"
            placeholder="enter ingredients"
            value={this.state.ingText}
            />
                        <input type="submit"/>
                </form>
                <div> 
                    {this.state.ingArray.map((ingredient)=>{
                        return <ul>-{ingredient}</ul>
                    })}
                </div>
        </div> 
    )
  }
}
export default IngredientsList
