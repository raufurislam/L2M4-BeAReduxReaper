import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootSate } from "../store";

export const useAppSelector = useSelector.withTypes<RootSate>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
