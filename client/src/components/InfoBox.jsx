import React from 'react'

class InfoBox extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let textToShow = ''
    if (this.props.winner) {
      if (this.props.winner === 'D') {
        textToShow = `Game was Drawn.  Click a square to reset`
      } else {
        textToShow = `${this.props.winner} has won the game!  Click on a blank square to reset`
      }
    } else {
      textToShow = `${this.props.player} turn to play, click on a blank square`
    }

    return (
      <div id='info-box'>
        <p> {textToShow} </p>
      </div>
    )
  }
}

export default InfoBox
