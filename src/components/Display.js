import PropTypes from 'prop-types'

export class Display extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>{props.result}</h1>
      </div>
    )
  }
}

Display.propTypes = {
  result: PropTypes.string.isRequired
}

Display.defaultProps = {
  result: '0'
}

export default Display