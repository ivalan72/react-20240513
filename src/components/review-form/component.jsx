import { useReducer } from "react";
import { RatingInput } from "../rating-input/component";
import { Button } from "../button/component";

const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    raiting: 0,
};

function reducer(state, { type, payload } = {}) {
    switch (type) {
        case 'setName':
            return { ...state, name: payload };
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

export const ReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
                    />
                </div>
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
                    <Button onClick={() => dispatch({ type: 'reset' })}>Сохранить</Button>
                </div>
            </form>
        </div>
    );
};
