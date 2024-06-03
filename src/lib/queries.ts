import { ITodo } from "../types/ITodo";
import { API_HOST } from "../utils/const";

export const getTodo = (id: number): Promise<ITodo> => {
  return fetch(`${API_HOST}/todos/${id}`).then((response) => response.json());
};

export const getTodos = (): Promise<ITodo[]> => {
  return fetch(`${API_HOST}/todos`).then((response) => response.json());
};
