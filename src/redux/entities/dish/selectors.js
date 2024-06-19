import { selectRestaurantById } from "../restaurant/selectors";

export const selectDishModule = (state) => state.dish;

export const selectDishById = (state, id) =>
    selectDishModule(state)?.entities[id];

export const selectDishIdsByRestaurantId = (state, id) =>
    selectRestaurantById(state, id)?.menu;
