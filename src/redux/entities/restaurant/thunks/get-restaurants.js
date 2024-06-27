import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../constants";

export const getRestaurants = createAsyncThunk(
    'restaurant/getRestaurants',
    async () => {
        const response = await fetch(`${baseUrl}/restaurants/`);

        return response.json();
    }
)
