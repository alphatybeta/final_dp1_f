import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notesApi = createApi({
  reducerPath: "notesApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://finaldp1-production.up.railway.app/api/",
  }),

  tagTypes: ["Note"],

  endpoints: (builder) => ({
    
    getNotes: builder.query({
      query: () => "notes",
      providesTags: ["Note"],
    }),

    addNote: builder.mutation({
      query: (data) => ({
        url: "notes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Note"],
    }),

    deleteNote: builder.mutation({
      query: (id) => ({
        url: `notes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Note"],
    }),
  }),
});

export const {
  useGetNotesQuery,
  useAddNoteMutation,
  useDeleteNoteMutation,
} = notesApi;