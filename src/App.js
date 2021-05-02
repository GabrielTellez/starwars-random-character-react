import React from "react"
import "./App.css"

const logo = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
const apiUrl = "https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id"

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      image: null,
      loadedCharacter: false
    }
  }
  getNewCharacter() {
    console.log("Click")
    const rand = Math.round(Math.random() * 88)
    const url = `${apiUrl}/${rand}.json`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          loadedCharacter: true,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          image: data.image
        })
      })
  }
  render() {
    return (
      <div>
        {this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <img src={this.state.image} alt={this.state.name} height="300" />
            <p>{this.state.height} cm</p>
            {this.state.homeworld && <p>Homeworld: {this.state.homeworld}</p>}
          </div>
        )}
        <button onClick={() => this.getNewCharacter()} type="button" className="btn">
          Randomize character
        </button>
      </div>
    )
  }
}

class StarWarsTitle extends React.Component {
  render() {
    return (
      <>
        <img src={logo} className="App-logo" alt="StarWars" />
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <StarWarsTitle />
      <StarWars />
    </div>
  )
}

export default App
