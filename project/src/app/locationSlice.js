import { createSlice } from '@reduxjs/toolkit'

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    startLocation: undefined, 
    endLocation: undefined,
    numPass: 0
  },
  reducers: {
    setStartLocation: (state, action) => {
        state.startLocation = action.payload
    },
    setEndLocation: (state, action) => {
      state.endLocation = action.payload
    },
    setNumPass: (state, action) => {
      state.numPass = action.payload
    }  
  },
})

// Action creators are generated for each case reducer function
export const { setStartLocation, setEndLocation, setNumPass} = locationSlice.actions

export default locationSlice.reducer