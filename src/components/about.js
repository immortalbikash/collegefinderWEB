import React from 'react';
import Navigation from './Navigation';

const About = (props) =>{
    return(
        <div className="about">
            <Navigation/>
            <center><h3>Welcome</h3></center>
            <center>At Website.com, we believe everyone deserves to have a website or online store.
                 Innovation and simplicity makes us happy: our goal is to remove any technical or 
                 financial barriers that can prevent business owners
                 from making their own website. We're excited to help you on your journey!</center>

                 <center><h3>Our story</h3></center>
                 <h5>
                 Website.com began in 2005. After years in the web hosting industry, we r
                 ealized that it was near impossible for the average Jane or Joe to create their own
                  website. Traditional web hosting services were
                  simply too complicated, time consuming, and expensive to manage

                  <p>We created the Website.com Site Builder with the user's perspective in
                   mind. We wanted to offer a platform that would require no coding skills or design 
                   experience. We keep it simple, so users can focus on creating an amazing website that
                    reflects their brand. Best of all - it's free. You can get online, showcase your
                   brand, or start selling products right away.
                   </p>
                 </h5>
        </div>
    )
}
export default About;