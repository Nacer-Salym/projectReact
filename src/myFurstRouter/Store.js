import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './usersSlice'
import sliceProduit from './sliceProduit'

const Store=configureStore({
    reducer:{
       users:UserSlice ,
       produit:sliceProduit
    }
})
export default Store