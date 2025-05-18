import React from "react";

const About = () => {
    return(
        <>
         <section class="about-container">
        <div class="about-header">
            <h1>About Us</h1>
            <p class="tagline">Delivering excellence since 2015</p>
        </div>
        
        <div class="about-content">
            <div class="about-image">
                <img src="https://via.placeholder.com/600x400" alt="Our Company"/>
            </div>
            
            <div class="about-text">
                <h2>Our Story</h2>
                <p>Founded in 2015, our company began with a simple mission: to provide innovative solutions that make a difference. What started as a small team of passionate individuals has grown into a thriving organization dedicated to excellence and customer satisfaction.</p>
                <p>Today, we continue to push boundaries and challenge conventions. Our team of experts brings diverse perspectives and skills to every project, ensuring creative, effective solutions for our clients' unique needs.</p>
                <p>We believe in building lasting relationships with our clients and communities. Through collaboration, transparency, and integrity, we've established ourselves as a trusted partner for businesses across industries.</p>
            </div>
        </div>
        
        <div class="values-container">
            <h2>Our Core Values</h2>
            <div class="values-grid">
                <div class="value-card">
                    <h3>Innovation</h3>
                    <p>We continuously seek new ideas and approaches to solve complex problems and create better solutions.</p>
                </div>
                
                <div class="value-card">
                    <h3>Excellence</h3>
                    <p>We are committed to delivering the highest quality in everything we do, exceeding expectations every time.</p>
                </div>
                
                <div class="value-card">
                    <h3>Integrity</h3>
                    <p>We conduct our business with honesty, transparency, and ethical principles that build trust.</p>
                </div>
                
                <div class="value-card">
                    <h3>Collaboration</h3>
                    <p>We believe in the power of teamwork and partnership to achieve greater results together.</p>
                </div>
            </div>
        </div>
        
      
    </section>
        </>
    )
}
export default About;
       
 
   
