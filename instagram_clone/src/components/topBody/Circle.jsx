import React from "react";
// import { IoMdHeartEmpty } from "react-icons/io";

function Circle({ highlights, highlightsPicsUrl }) {
    if (!highlights.data || !Array.isArray(highlights.data.items)) {
        return <p>No highlights available.</p>;
    }
    // console.log(highlightsPicsUrl);
    return (
        <ul className="circle-container">
            {highlights.data.items.map((item, index) => (
                <li key={index} className="circle">
                    <div className={`circle-image-box ${index % 2 == 0 && "even"}`}>
                        {/* <IoMdHeartEmpty className="circle-image" /> */}
                        <img src={highlightsPicsUrl[index]} className="circle-image" alt={`Highlight ${index}`} />
                    </div>
                    <p>{item.title}</p>
                </li>
            ))}
        </ul>
    );
}

export default Circle;
