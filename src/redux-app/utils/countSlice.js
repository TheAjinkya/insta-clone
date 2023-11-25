import {createSlice} from "@reduxjs/toolkit"

const initialCount = {
    value: 0
}

const countSlice = createSlice({
    name: "count",
    initialState: initialCount,
    reducers: {
        increment: (state, action) => {
            state.value = state.value + action.payload
        },
        decrement: (state, action) => {
            state.value = state.value - action.payload
        },
        reset: (state) => {
            state.value = 0
        }
    }
})

export const { increment, decrement, reset } = countSlice.actions
export default countSlice.reducer;
