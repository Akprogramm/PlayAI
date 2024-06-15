import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    istate: [],
    show: false,          
    active: -1
}


export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        addoTodo:(state,action) => {
        const todo = { 
         id: nanoid(), 
         text: action.payload,
        }
      state.istate.push(todo) 
    },

    removeTodo:(state,action) => {
       state.istate = state.istate.filter((todo)=>{
         todo.id !== action.payload
       }) 
    },

    setShow:(state,action)=>{
      state.show = action.payload; 
    },
      
    setActive: (state,action) => {
      state.active = action.payload; 
    }

}
})

export const {addoTodo,removeTodo,setShow,setActive} = slice.actions;
export default slice.reducer;