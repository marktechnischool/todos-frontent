import { http, HttpResponse } from "msw";

const allTodos = new Map(
  Object.entries({
    1: {
      _id: "1",
      title: "Buy milk",
    },
    2: {
      _id: "2",
      title: "Buy eggs",
    },
    3: {
      _id: "3",
      title: "Buy bread",
    },
    4: {
      _id: "4",
      title: "Buy coffee",
    },
  }),
);

export const handlers = [
  http.get("http://mockapi.pzw/todos", () => {
    return HttpResponse.json(Array.from(allTodos.values()));
  }),
  http.post("http://mockapi.pzw/todos", async ({ request }) => {
    const { title } = await request.json();
    const newTodo = {
      _id: String(allTodos.size + 1),
      title: title,
    };
    allTodos.set(newTodo._id, newTodo);
    return HttpResponse.json(newTodo, { status: 201 });
  }),
];
