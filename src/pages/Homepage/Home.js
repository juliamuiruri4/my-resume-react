import React from "react";

import image from "../Homepage/dog-kitty.png";
const imageAltText = "Black desk with menu and coffee";

const Home = () => {
return (
<section id="home">
    <img className="background" src={image} alt={imageAltText} style={{top: "50%", width: "80%"}}/>
</section>
);
};

export default Home;