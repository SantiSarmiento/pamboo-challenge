import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import tareasSlice from './tareas/tareasSlice'
import usuarioSlice from './usuario/usuarioSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage
}

const reducers = combineReducers({
  tareas: tareasSlice,
  usuario: usuarioSlice
});

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})