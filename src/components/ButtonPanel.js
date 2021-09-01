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
        <div className='group_2'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>X</button>
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