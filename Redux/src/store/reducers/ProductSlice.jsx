import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    data : [
        {   
            id: 23,
            product : "iphone",
            price : 12324
        },
    ],
}

const productSlice = createSlice({
    name : "products",
    initialState,
    reducers : {
        add : (state,action)=>{
            console.log(action);
            state.data.push(action.payload)
            
        },
        remove : (state , action)=>{
            setTimeout(()=>{
                Set.data.pop()
            },2000)
        }
    },
})
export default productSlice.reducer;
export const {add , remove} = productSlice.actions;