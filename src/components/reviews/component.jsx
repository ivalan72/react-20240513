import { useContext } from "react";
import { ReviewForm } from "../review-form/component";
import { Review } from "../review/component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api";
import { UserContext } from "../user-context/context";

export const Reviews = ({restaurantId}) => {
    const { data: reviews, isLoading } = useGetReviewsByRestaurantIdQuery(restaurantId);

    const { username } = useContext(UserContext);

    if (isLoading) {
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
            { username ?
                <ReviewForm restaurantId={restaurantId} user={username}/> :
                <div>Log in to leave a review</div>
            }
        </div>
    );
};
