import { useCallback, useReducer } from "react";
import { RatingInput } from "../rating-input/component";
import { Button } from "../button/component";
import { useCreateReviewMutation } from "../../redux/service/api";

const DEFAULT_FORM_VALUE = {
    text: '',
    rating: 5,
};

function reducer(state, { type, payload } = {}) {
    switch (type) {
        case 'setText':
            return { ...state, text: payload };
        case 'setRating':
            return { ...state, rating: payload };
        case 'reset':
            return { ...DEFAULT_FORM_VALUE };
        default:
            return state;
    };
}

export const CreateReviewForm = ({restaurantId, user}) => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const [createReview, {isLoading}] = useCreateReviewMutation();

    const onClick = useCallback(
        () => {
            createReview({
                restaurantId,
                newReview: {
                    ...form,
                    user
                }
            });
           dispatch({ type: 'reset' });
        },
        [dispatch,createReview,restaurantId,user,form]
    );

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
                    {isLoading ?
                        <span>Sending...</span> :
                        <Button onClick={onClick}>Сохранить</Button>
                    }
                </div>
            </form>
        </div>
    );
};
