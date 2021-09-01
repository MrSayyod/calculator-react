export class ButtonPanel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className='group_1'>
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>/</button>
        </div>
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

export default ButtonPanel