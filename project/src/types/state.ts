import {store} from '../store';
import Location from './location';

type State = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type SelectedPoint = Location;

export type {State, AppDispatch, SelectedPoint};
