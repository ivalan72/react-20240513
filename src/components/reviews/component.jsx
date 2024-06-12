import { ReviewForm } from "../review-form/component";
import { Review } from "../review/component";

export const Reviews = ({reviews}) => {
    if (!reviews || !reviews.length) {
        return <div>Ещё никто не оставлял отзывов</div>;
    }

    return (
        <div>
            <ul>
                {reviews.map(id => (
                    <li key={id}><Review reviewId={id}/></li>
                ))}
            </ul>
            <ReviewForm />
        </div>
    );
};
