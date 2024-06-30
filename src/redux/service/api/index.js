import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
    reducerPath: 'api',
    tagTypes: ['Review', 'Restaurant'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5173/api/'}),
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
        getDishById: builder.query({
            query: (dishId) => ({
                url: `dish/${dishId}`,
            })
        }),
        getReviewsByRestaurantId: builder.query({
            query: (restaurantId) => ({
                url: 'reviews',
                params: { restaurantId },
            }),
            providesTags: (result, _, restaurantId) =>
                result
                    .map(({id}) =>({type: 'Review', id}))
                    .concat(
                        {type: 'Review', id: 'All'},
                        {type: 'Restaurant', id: restaurantId}
                    )
        }),
        createReview: builder.mutation({
            query: ({restaurantId, newReview}) => ({
                url: `review/${restaurantId}`,
                method: 'POST',
                body: newReview,
            }),
            invalidatesTags: (result, _, {restaurantId}) => [
                {type: 'Restaurant', id: restaurantId},
            ]
        }),
        updateReview: builder.mutation({
            query: ({reviewId, newReview}) => ({
                url: `review/${reviewId}`,
                method: 'PATCH',
                body: newReview,
            }),
            invalidatesTags: (result, _, {reviewId}) => [
                {type: 'Review', id: reviewId},
            ]
        })
    })
});

export const {
    useGetRestaurantsQuery,
    useGetMenuByRestaurantIdQuery,
    useGetReviewsByRestaurantIdQuery,
    useCreateReviewMutation,
    useUpdateReviewMutation,
    useGetDishByIdQuery,
} = apiService;
