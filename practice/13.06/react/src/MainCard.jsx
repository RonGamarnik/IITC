import React, { useState } from "react";

function MainCard() {
    const FAQs = [
        {
            id: 1,
            title: "What is Frontend Mentor, and how will it help me?",
            content: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        },
        {
            id: 2,
            title: "Is Frontend Mentor free?",
            content: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
        },
        {
            id: 3,
            title: "Can I use Frontend Mentor projects in my portfolio?",
            content: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
        },
        {
            id: 4,
            title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
            content: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
        }
    ];

    const [expandedId, setExpandedId] = useState(1);

    const toggleItem = (id) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };

    return (
        <div className="main-card">
           <div className="main-card-header">
            <img src="../public/icon-star.svg" ></img>
                <h1>FAQs</h1>
            </div>
            {FAQs.map((item) => (
                <div key={item.id} id={item.id} className="item">
                <div className="title" onClick={() => toggleItem(item.id)}>
                <div className="content">
                        <h2>{item.title}</h2>
                        <img
                            onClick={() => toggleItem(item.id)}
                            src={expandedId === item.id ? "../public/icon-minus.svg" : "../public/icon-plus.svg"}
                            alt="expand icon"
                            />
                            </div>
                        <div>
                        {expandedId === item.id && (
                            <p className="content-paragraph">{item.content}</p>
                        )}
</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MainCard;
