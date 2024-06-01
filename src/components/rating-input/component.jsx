export const RatingInput = ({value, onChange, max = 5}) => {
    return (
        <div>
            <span>Rating</span>
            {new Array(max)
                .fill(0)
                .map((item, index) =>
                    <button onClick={() => onChange(index + 1)} disabled={value === index + 1}>
                        {index + 1}
                    </button>
                )
            }
        </div>
    );
};
