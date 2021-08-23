// Creating a Redux Store, which holds the state of the application.
import { createStore } from 'redux';
// Importing the reducer file itself.
import reducers from './reducers';
// Exporting the reducers file to the createStore function.
export default createStore(reducers);
