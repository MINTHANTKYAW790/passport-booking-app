import { memo, useState } from "react";
import B from "./B";

const A = () => {
    const [value, setValue] = useState(1);
    console.log("A is rerendered!");

    return (
        <div>
            <button
                onClick={() => {
                    setValue(value + 1);
                }}
            >
                A Click
            </button>
            <B />
        </div>
    );
};

export default memo(A);
