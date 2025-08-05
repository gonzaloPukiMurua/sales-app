"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { increment, decrement } from "@/store/slices/counterSlice";

export const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="p-4">
            <h1 className="text-xl">Contador: {count}</h1>
            <button onClick={() => dispatch(increment())} className="btn btn-primary mr-2">+</button>
            <button onClick={() => dispatch(decrement())} className="btn btn-secondary">-</button>
        </div>
    );
}