import { Review } from "../review/component";

export const Reviews = ({reviews}) => {
    if (!reviews || !reviews.length) {
        return <div>Ещё никто не оставлял отзывов</div>;
    }

    return (
        <ul>
            {reviews.map(review => (
                <li key={review.id}><Review review={review}/></li>
            ))}
        </ul>
    );
};
