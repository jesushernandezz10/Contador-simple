import React from "react";

function SecondsCounter(props) {
    const digits = props.seconds.toString().padStart(6, "0").split("");

    return (
        <div className="bigCounter d-flex justify-content-center bg-dark text-white p-4 fs-1">
            <div className="mx-2 bg-secondary p-3 rounded">
                <i className="fa-regular fa-clock"></i>
            </div>
            {digits.map((digit, index) => (
                <div key={index} className="mx-2 bg-secondary p-3 rounded">
                    {digit}
                </div>
            ))}
        </div>
    );
}

export default SecondsCounter;
