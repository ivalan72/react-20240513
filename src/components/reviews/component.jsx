import { ReviewForm } from "../review-form/component";
import { Review } from "../review/component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api";

export const Reviews = ({restaurantId}) => {
    const { data: reviews, isFetching } = useGetReviewsByRestaurantIdQuery(restaurantId);

    if (isFetching) {
        return <div>Loading...</div>;
    }

    if (!reviews) {
        return null;
    }

    return (
        <div>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}><Review review={review}/></li>
                ))}
            </ul>
            <ReviewForm />
        </div>
    );
};
