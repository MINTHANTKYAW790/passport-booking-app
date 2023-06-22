import { useState } from "react";
import A from "./A";

const Main = () => {
    const [value, setValue] = useState(1);
    return (
        <div>
            <button
                onClick={() => {
                    setValue(value + 1);
                }}
            >
                MainClick
            </button>
            <A />
        </div>
    );
};

export default Main;
