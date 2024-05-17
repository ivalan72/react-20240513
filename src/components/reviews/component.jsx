import { Review } from "../review/component";

export const Reviews = ({reviews}) => {
    return (
        <ul>
            {reviews.map(review => (
                <li key={review.id}><Review review={review}/></li>
            ))}
        </ul>
    );
};
