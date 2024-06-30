import { useContext } from "react";
import { CreateReviewForm } from "../create-review-form/component";
import { Review } from "../review/component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api";
import { UserContext } from "../user-context/context";
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const { restaurantId } = useParams();

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
                    <li key={review.id}>
                        <Review review={review}/>
                    </li>
                ))}
            </ul>
            { username ?
                <CreateReviewForm restaurantId={restaurantId} user={username}/> :
                <div>Log in to leave a review</div>
            }
        </div>
    );
};
