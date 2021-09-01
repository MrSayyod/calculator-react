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
        <div className='group_3'>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div className='group_4'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div className='group_5'>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    )
  }
}

export default ButtonPanel