import loginReducer from '../features/login/loginSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: []
}
const persistedReducer = persistReducer(persistConfig, loginReducer)

const rootReducer = combineReducers({
    userlogin: persistedReducer, //persistReducer(persistConfig, loginReducer)
    devTools: process.env.NODE_ENV !== 'production',
    
})

export default rootReducer;