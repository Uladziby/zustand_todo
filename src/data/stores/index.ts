/** @format */

import shallow from "zustand/shallow";

import { useToDoStore as useToDoStoreZus, ToDoStore } from "./useToDoStore";
import { StateSelector } from "zustand";

const useToDoStore: <T>(selector: StateSelector<ToDoStore, T>) => T = (selector) =>
	useToDoStoreZus(selector, shallow);

export { useToDoStore };
