import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/api/'}),
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => ({
                url: 'restaurants'
            })
        }),
        getMenuByRestaurantId: builder.query({
            query: (restaurantId) => ({
                url: 'dishes',
                params: { restaurantId },
            })
        }),
        getReviewsByRestaurantId: builder.query({
            query: (restaurantId) => ({
                url: 'reviews',
                params: { restaurantId },
            })
        })
    })
});

export const {
    useGetRestaurantsQuery,
    useGetMenuByRestaurantIdQuery,
    useGetReviewsByRestaurantIdQuery,
} = apiService;
