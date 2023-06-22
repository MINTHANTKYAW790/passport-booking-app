import { memo, useState } from "react";

const C = () => {
    const [value, setValue] = useState(1);
    console.log("C is rerendered!");
    return (
        <div>
            <button
                onClick={() => {
                    setValue(value + 1);
                }}
            >
                C Click
            </button>
        </div>
    );
};

export default memo(C);
