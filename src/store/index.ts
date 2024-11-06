import { configureStore } from '@reduxjs/toolkit'

import tarefasReducers from './reducers/tarefas'
import filtroReducers from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducers,
    filtro: filtroReducers
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
