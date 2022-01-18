import React from 'react';


export default function HomePage() {
    return (
        <div>
            <h1 className= "free">Free APIs For Your Next Project</h1>
            <div className="jumbotron">
                <div className="rules-container">
                    <h2>Rules For This Site: </h2>
                    <br/>
                    <ul id="rules" style={{listStyleType:'none'}}>
                        <li>1. This site is for free API's, please make sure that there is not subscription needed or any form of payment. </li>
                        <br/>
                        <li>2. Keep it respectful, as our main goal is to help users and provde them easier access to free APIs</li>
                        <br/>
                        <li>3. No duplicates, this is to help keep the list organized. Soon we will update the site to avoid any dulipcated to be submitted.</li>
                        <br/>
                    </ul>
                </div>
            </div>
            <div className="updates">
                <container>
                    <h2>Updates</h2>
                        <h3>More Features Soon!</h3>
                        <p>As we develop this site we will update everyone of the new features.</p>
                    <em> Jan. 16, 2022</em>
                </container>
            </div>
        </div>
    )
}

