import { createSlice } from "@reduxjs/toolkit";

 const counterSlice = createSlice({
        name: "counter",
        initialState:{
            count: 0 
        },
        reducers:{
            increment: (state)=>{
                state.count++
            },
            decrement: (state) => {
                state.count--;
            },
            incrementByAmount: (state, action) => {
                state.count += action.payload;
            },
            reset: (state) => {
                return { ...state, count: 0 };
            },
            decrementByAmount: (state, action) => {
                state.count -= action.payload;
            }
        }
 })

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;