/** @format */

import create, { GetState, SetState, State, StoreApi, UseBoundStore } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";

export type Store<T extends State> = UseBoundStore<T>;
/* 
export const createStore = <T extends State>(
	fn: (set: SetState<T>, get: GetState<T>, api: StoreApi<T>) => T,
	name: string
): Store<T> => {
	if (process.env.NODE_ENV === "development") {
		return create(devtools(fn, { name }));
	}

	return create(fn);
};
 */
export const createStore = <T extends State>(
	fn: (set: SetState<T>, get: GetState<T>, api: StoreApi<T>) => T,
	name: string
): Store<T> => {
	if (process.env.NODE_ENV === "development") {
		return create(subscribeWithSelector(devtools(fn, { name })));
	}

	return create(subscribeWithSelector(fn));
};
