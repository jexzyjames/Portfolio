import {usestate} from 'react'
import './todo.css'
function UI(props) {
  return (
    <div className='wrapper'>
      <input className='input' type="text" 
      value={props.value}
    defaultValue={props.defaultValue}
      onChange={props.onChange} 
      placeholder='Enter Your Schedule' />
      <button className='create'  onClick={props.onclick}>Create</button>
    </div>
  )
}

export default UI
