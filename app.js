/** @jsxImportSource https://esm.sh/react@18.2.0 */
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import React, { useState } from "https://esm.sh/react@18.2.0";

const NO_PHRASES = [
    "No 💔",
    "Pretty please? 🥺",
    "But we'd be so cute together! 💕",
    "One more chance, pookie?",
    "Don't break my heart :(",
    "What about a maybe?",
    "Please don't do this to me, I'm fragile",
];

function App() {
    const [noClicks, setNoClicks] = useState(0);
    const [isValentine, setIsValentine] = useState(false);
    const yesButtonSize = (noClicks * 20) + 16;

    const firstImg = "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif";
    const secondImg = "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif";

    const handleNo = () => {
        setNoClicks(prev => prev + 1);
    };

    const handleYes = () => {
        setIsValentine(true);
    };

    return React.createElement(
        "div",
        { className: "container" },
        !isValentine
            ? React.createElement(
                React.Fragment,
                null,
                React.createElement("img", {
                    src: firstImg,
                    alt: "Cute jumping bear with hearts",
                    className: "bear-img"
                }),
                React.createElement("h1", null, "Will you be my Valentine? 💘"),
                React.createElement(
                    "div",
                    { className: "button-container" },
                    React.createElement(
                        "button",
                        {
                            onClick: handleYes,
                            className: "yes-btn",
                            style: { fontSize: `${yesButtonSize}px` }
                        },
                        "Yes"
                    ),
                    React.createElement(
                        "button",
                        {
                            onClick: handleNo,
                            className: "no-btn"
                        },
                        noClicks === 0 ? "No" : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]
                    )
                )
            )
            : React.createElement(
                React.Fragment,
                null,
                React.createElement("img", {
                    src: secondImg,
                    alt: "Happy bears with kisses",
                    className: "bear-img"
                }),
                React.createElement(
                    "div",
                    { className: "success-message" },
                    "Yay!!! 💖🎉"
                )
            )
    );
}

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(React.createElement(App));
}
