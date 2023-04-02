import React from "react";

import image from "/Demos/my-resume-react/src/images/dog-kitty.png";
const imageAltText = "Black desk with menu and coffee";

const Home = () => {
return (
<section id="home">
    <img className="background" src={image} alt="" style={{top: "50%", width: "80%"}}/>
</section>
);
};

export default Home;