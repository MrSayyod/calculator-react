import PropTypes from 'prop-types'

export class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <button>{props.buttonName}</button>
    )
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired
}

export default Button