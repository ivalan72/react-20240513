import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../constants";

export const getReviewsByRestaurantId = createAsyncThunk(
    'review/getReviewsByRestaurantId',
    async (restaurantId) => {
        const response = await fetch(`${baseUrl}/reviews?restaurantId=${restaurantId}`);

        return response.json();
    }
)
