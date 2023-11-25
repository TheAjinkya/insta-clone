import React from 'react'

import {useDispatch, useSelector} from "react-redux"
import { decrement, increment, reset } from '../utils/countSlice'

function CompOne() {

const countNum = useSelector(state=>state.count)

const dispatchCount = useDispatch()

console.log("countNum", countNum)

  return (
    <div>Hello CompOne: {countNum.value} <br/>
    <button type='button' onClick={()=>dispatchCount(increment(20))}>Increment</button>
    <button type='button' onClick={()=>dispatchCount(decrement(20))}>Decrement</button>
    <button type='button' onClick={()=>dispatchCount(reset())}>Reset</button>
    </div>
  )
}

export default CompOne