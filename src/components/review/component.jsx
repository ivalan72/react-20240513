export const Review = ({review}) => {

    if (!review) {
        return null;
    }

    return <span>{review.text}</span>
};
