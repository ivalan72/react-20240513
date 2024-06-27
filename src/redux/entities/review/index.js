import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./thunks/get-reviews-by-restaurant-id";

const entityAdapter = createEntityAdapter();

export const ReviewSlice = createSlice({
    name: 'review',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builer) => builer.addCase(
        getReviewsByRestaurantId.fulfilled,
        (state, { payload }) => {
            entityAdapter.setMany(state, payload);
        }
    )
});
