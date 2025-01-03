import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from '../redux/counterSlice'

const Counter = () => {
const [amount, setAmount] = React.useState(0)
 const {count} = useSelector(state=>state.counterReducer)
const dispatch = useDispatch()
const handleIncrementByAmount = () => {
  if(amount) {
    dispatch(incrementByAmount(+amount))
  }else{
    alert('Please Enter a valid number')
  }
}

const decrementByAmount = (amount) => (dispatch) => {
  dispatch(decrement(amount));
};

  return (
    <div className=' border rounded p-5 text-center'>
        <h1 style={{fontSize:'100px'}}>{count}</h1>
        <div style={{width:'500px'}} className='d-flex justify-content-between my-5'>
          <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
          <button  onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
          <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <input onChange={e=>setAmount(e.target.value)} type="text" placeholder='Increment Counter Amount' className='form-control' />
          <button onClick={handleIncrementByAmount} className='btn btn-primary ms-3'>Increment By Amount</button>
        </div>
    </div>
  )
}

export default Counter