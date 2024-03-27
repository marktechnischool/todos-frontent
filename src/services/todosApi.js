import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todosApi = createApi({
    tagTypes: ["Todos"],
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (builder) => ({
        fetchTodos: builder.query({
            query: () => "todos",
            providesTags: ["Todos"],
        }),
        createTodo: builder.mutation({
            invalidatesTags: ["Todos"],
            query: (todo) => ({
                url: "todos",
                method: "POST",
                body: todo,
            }),
        }),
    }),
});

export const { useFetchTodosQuery, useCreateTodoMutation } = todosApi;
export default todosApi;