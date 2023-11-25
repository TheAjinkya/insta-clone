import React from 'react'
import {useDispatch} from "react-redux"
import { decrement, increment, reset } from '../utils/countSlice'

function CompTwo() {
    const dispatchCount = useDispatch()
    return (
        <div>
            Comp Two <br/>
            <div> 
                <button type='button' onClick={() => dispatchCount(increment(20))}>Increment</button>
                <button type='button' onClick={() => dispatchCount(decrement(20))}>Decrement</button>
                <button type='button' onClick={() => dispatchCount(reset())}>Reset</button>
            </div>
        </div>
    )
}

export default CompTwo