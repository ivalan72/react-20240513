import { useContext, useState, useCallback } from "react";
import { UpdateReviewForm } from "../update-review-form/component";
import { Button } from "../button/component";
import { UserContext } from "../user-context/context";
import { useUpdateReviewMutation } from "../../redux/service/api";

export const Review = ({review}) => {
    const { username } = useContext(UserContext);

    const [updateMode, setUpdateMode] = useState(false);

    const [updateReview, {isLoading}] = useUpdateReviewMutation();

    const reviewId = review.id;

    const saveReview = useCallback(
        (newReview) => {
            updateReview({reviewId,
                newReview: {
                    ...newReview,
                    user: username
                }
            });
            setUpdateMode(false);
        },
        [updateReview, reviewId, username]
    );

    if (!review) {
        return null;
    }

    if (isLoading) {
        return <span>Sending...</span>
    }

    if (username && updateMode) {
        return <UpdateReviewForm
                    review={review}
                    saveReview={saveReview}
                    onCancel={() => setUpdateMode(false)} />
    }

    return (
        <>
            <span>{review.text}</span>
            {username && <Button onClick={() => setUpdateMode(true)}>Edit</Button>}
        </>
    );
};
