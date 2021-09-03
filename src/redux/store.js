import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import contactsReducer from './contacts/contacts-reducer';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
];

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};
// v3
const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactsReducer),
    },
    middleware,
    devtools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

// v1
// const initialState = {};
// // Функция, принимает предидущее состояние (state), действие (action)
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     // case 'name':

//     default:
//       return state;
//   }

//   // возвращает новое состояние
//   return state;
// };

// v2
// store - хранилище
// const store = createStore(rootReducer, composeWithDevTools());