import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import contactReducer from './contactReducers';

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const store = configureStore({
    reducer: { contacts: persistReducer(persistConfig, contactReducer) },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(logger),

    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const persistore = { store, persistor };

export default persistore;
