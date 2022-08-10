import { createSlice } from "@reduxjs/toolkit";


const ThemeSlice= createSlice({
name: "Theme",
initialState: "Light",
reducers :{
    ChangeTheme(state:string,action:{payload:string}){
        switch (action.payload) {
            case "Light"
        }
    }
}
})