import React from "react";

const Resume = () => {
return (
    <section id="resume">
        <header id="header">
            <h1>JULIA MUIRURI</h1>
        </header>

    <main>
        <article id="mainLeft">
            <section>
                 <h2>CONTACT</h2>
                    <p>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <a href="mailto:test@test.com">juliamuiruri@me.com</a>
                    </p>
                    <p>
                        <i class="fab fa-github" aria-hidden="true"></i>
                        <a href="github.com/juliamuiruri4">juliamuiruri4</a>
                    </p>
                     <p>
                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                        <a href="linkedin.com/juliamuiruri">juliamuiruri</a>
                    </p>
            </section>
            <section>
            <h2>SKILLS</h2>
                    <ul>
                        <li> Software Architecture </li> 
                        <li> Program Management </li> 
                        <li> Project Management </li> 
                        <li> Microsoft Power Platform </li> 
                        <li> Azure DevOps </li> 
                        <li> GitHub </li> 
                        <li> Microsoft Azure </li> 
                        <li> React </li> 
                    </ul>
            </section>
            <section>
					<h2>EDUCATION</h2>
                    <h3>Bachelor’s Degree in Information Technology</h3>
                    <p>
                        Dedan Kimathi University of Technology - May 2018 - Dec 2021
                    </p>
			</section>  
            <section>
					<h2>CERTIFICATIONS & ACHIEVEMENTS</h2>
                    <ul>
                        <li> Microsoft Certified: Power Platform Fundamentals </li> 
                        <li> Microsoft Certified: Security, Compliance & Identity Fundamentals </li> 
                        <li> Microsoft Certified: Azure Fundamentals </li> 
                        <li> Software Architecture: University of Alberta, Coursera </li> 
                        <li> Foundations of Project Management: University of Alberta, Coursera </li> 
                        <li> Runner Up: 2020 Imagine Cup EMEA Regional Finals </li> 
                    </ul>  
                </section>   
        </article>
        <article id="mainRight">
        <section>
			<h2>ABOUT</h2>
                <p>I value teamwork to solve today's and tomorrow's problem affecting everyone from the smallest community up to a global scale. I continuously learn to understand and interpret the community's needs to recognize opportunities, anticipate problems and make recommendations. </p>
		</section>
		<section>
			<h2>WORK EXPERIENCE</h2>
            <h3>Academic Cloud Advocate</h3>
            <p>
                Microsoft | May 2022 – Present
            </p>
            <p>I help global students & faculty learn how they can incorporate different Microsoft Technologies in their classrooms to bridge the skills gap between Academia and Industry.</p>

            <h3>Game of Learners Ambassador</h3>
                <p>
                    Microsoft Africa Development Center | Jan 2021 – June 2021
                </p>
                <p>Program management - Helped 150+ student developers acquire and nurture skills in Software Engineering Fundamentals</p>
            <h3>Industrial Attaché</h3>
                <p>
                    Microsoft Africa Development Center | Sept 2021 – Dec 2021
                </p>
                    <ul>
                        <li>Project management</li>
                        <li>Frontend Developer - Ndovu Network Project</li>
                </ul>
		</section>
        <section>
			<h2>VOLUNTEER EXPERIENCE</h2>
            <h3>Imagine Cup Regional Judge</h3>
                <p>
                    Microsoft | March 2023 
                </p>
                    <p>Judging at the prestigious Microsoft Imagine Cup EMEA Regional Finals</p>
                        <h3>Game of Learners Ambassador</h3>
                        <p>
                            Microsoft | Sept 2019 – Dec 2021
                        </p>
                        <ul>
                                <li>Collaborate with global community leaders, founding 5 technology-oriented 
                                    communities in various universities with 2000+ members 
                                    continuously learning about technology</li>
                                
                        </ul>
		</section>
        </article>
    </main>
    </section>		
);
};

export default Resume;