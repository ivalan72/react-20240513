import { useDispatch, useSelector } from "react-redux";
import { ReviewForm } from "../review-form/component";
import { Review } from "../review/component";
import { useEffect } from "react";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { selectReviewIdsByRestaurantId } from "../../redux/entities/review/selectors";

export const Reviews = ({restaurantId}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviewsByRestaurantId(restaurantId));
    }, [dispatch, restaurantId]);

    const reviewIds = useSelector(
        (state) => selectReviewIdsByRestaurantId(state, restaurantId)
    );

    if (!reviewIds) return null;

    return (
        <div>
            <ul>
                {reviewIds.map(id => (
                    <li key={id}><Review reviewId={id}/></li>
                ))}
            </ul>
            <ReviewForm />
        </div>
    );
};
