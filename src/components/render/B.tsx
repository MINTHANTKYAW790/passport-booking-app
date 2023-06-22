import { memo, useState } from "react";
import C from "./C";

const B = () => {
    const [value, setValue] = useState(1);
    console.log("B is rerendered!");
    return (
        <div>
            <button
                onClick={() => {
                    setValue(value + 1);
                }}
            >
                B Click
            </button>
            <C />
        </div>
    );
};

export default B;
