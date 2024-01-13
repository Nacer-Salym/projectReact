import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getData = createAsyncThunk("getData/myuserslice", async () => {
  return await fetch("  http://localhost:6060/client").then((res) =>
    res.json()
  );
});

const UserSlice = createSlice({
  name: "myuserslice",

  initialState: {
    isModif: false,
    isloding: true,
    user: [],
  },
  reducers: {
    Addusrs: (state, action) => {
      axios.post("http://localhost:6060/client", action.payload);
      alert("ajoute avec sucssece");
    },
    Delet: (state, action) => {
      if (window.confirm("are you sur !!!!")) {
        axios.delete(`http://localhost:6060/client/${action.payload}`);
        let index = state.user.findIndex((e) => e.id === action.payload);
        state.user.splice(index, 1);
      }
    },
    sarger: (state, action) => {
      state.isModif = true;
    },
    Modif: (state, action) => {
      state.isModif = false;
      axios.put(`http://localhost:6060/client/${action.payload.id}`, {
        usernam: action.payload.usernam,
        password: action.payload.password,
        email: action.payload.email,
        adress: action.payload.adress,
      });
      const index = state.user.findIndex((e) => e.id === action.payload.id);
      state.user.splice(index, 1, action.payload);
      alert("modify sucssecefuly");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state, action) => {})
      .addCase(getData.fulfilled, (state, action) => {
        state.isloding = false;
        state.user = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.isloding = false;
      });
  },
});
export const { Addusrs, Delet, sarger, Modif } = UserSlice.actions;
export default UserSlice.reducer;
