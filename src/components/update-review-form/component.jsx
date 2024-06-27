import { useReducer } from "react";
import { RatingInput } from "../rating-input/component";
import { Button } from "../button/component";

function reducer(state, { type, payload } = {}) {
    switch (type) {
        case 'setText':
            return { ...state, text: payload };
        case 'setRating':
            return { ...state, rating: payload };
        default:
            return state;
    };
}

export const UpdateReviewForm = ({review, saveReview, onCancel}) => {
    const [form, dispatch] = useReducer(reducer, {text: review.text, rating: review.rating});

    return (
        <div>
            <form>
                <div>
                    <label>Text</label>
                    <input
                        type="text"
                        value={form.text}
                        onChange={(e) => dispatch({ type: 'setText', payload: e.target.value })}
                    />
                </div>
                <div>
                    <RatingInput
                        value={form.rating}
                        onChange={(rating) => dispatch({ type: 'setRating', payload: rating })}
                    />
                </div>
                <div>
                    <Button onClick={() => saveReview(form)}>Save</Button>
                    <Button onClick={onCancel}>Cancel</Button>
                </div>
            </form>
        </div>
    );
};
