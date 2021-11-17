import React from "react";
// import { modalStyle } from "./style";

function CustomConfirm(props) {
    return (
        <div>
            {props.text} <br />
            <button onClick={props.close}>Close</button>
            <button onClick={props.confirm}>Confirm</button>
        </div>
    );
};

export default CustomConfirm;