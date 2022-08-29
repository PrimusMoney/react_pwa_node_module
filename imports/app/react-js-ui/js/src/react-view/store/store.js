import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import storage from 'redux-persist/lib/storage';

import rootReducer from '@primusmoney/react_client_wallet/imports/view/reducers/rootreducer.js';


const migrations = {
		
};

const persistConfig = {
	key: 'root',
	version: 1,
	storage: storage,
	stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
	migrate: createMigrate(migrations, { debug: false })
};

const pReducer = persistReducer(persistConfig, rootReducer);

const initialState = {
		
};

const middlewares = [thunk];



export const store = createStore(pReducer, initialState, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
