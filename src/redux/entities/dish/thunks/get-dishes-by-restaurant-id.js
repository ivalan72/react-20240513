import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../constants";

export const getDishesByRestaurantId = createAsyncThunk(
    'dish/getDishesByRestaurantId',
    async (restaurantId) => {
        const response = await fetch(`${baseUrl}/dishes?restaurantId=${restaurantId}`);

        return response.json();
    }
)
