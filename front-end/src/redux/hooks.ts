import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// Here we define the useAppDispatch hook, 
// which returns the dispatch function with the AppDispatch type.
// and we also define the useAppSelector hook, which returns 
// the selected state with the RootState type.

// https://redux-toolkit.js.org/tutorials/quick-start followed this tutorial