import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    books: [],
    error: '',
}

export const fetchBooks = createAsyncThunk('fetchBooks', async ()=>{

    const response = await fetch('http://localhost:5005/books') 
    return response.json();
})

const bookSlice = createSlice({
    name: "book",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state, action) =>{
            state.isLoading = true;
        });
        builder.addCase(fetchBooks.fulfilled,(state, action) =>{
            state.isLoading = false;
            state.books = action.payload;
        });
        builder.addCase(fetchBooks.rejected, (state, action) =>{
            state.error = action.error.message;
            state.isLoading = false;
        })
    }
})

export default bookSlice.reducer;
