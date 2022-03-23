import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/reducers";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector