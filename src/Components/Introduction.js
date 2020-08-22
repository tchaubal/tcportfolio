import React, { Component } from 'react';

export default class Introduction extends Component {
    render() {
        return(
			<article id="top" className="wrapper style1">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-5-large col-12-medium">
                        <span className="image fit"><img src="/images/Tanushree.jpg" alt="" /></span>
                    </div>
                    <div className="col-8 col-7-large col-12-medium">
                        <header>
                            <h1>Hi. I'm <strong>Tanushree Chaubal</strong>.</h1>
                        </header>
                        {/* <p>And this is <strong>Miniport</strong>, a free, fully responsive HTML5 site template designed by <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5 UP</a> &amp; released under the <a href="http://html5up.net/license">CCA license</a>.</p>
                        <a href="#work" className="button large scrolly">Learn about what I do</a> */}
                        <p>I am a graduate of <strong>San Jose State University, California</strong> (Go Spartans!), with a Masters in Software Engineering. I love building web and mobile applications.</p>
                        <div className="intro-buttons">
                            <a href="https://drive.google.com/file/d/1AGlrd9g-SWdBsfuh4yxMyXxCsL3UfiAs/view?usp=sharing" className="button scrolly">View Resume</a>
                            <a href="https://github.com/tchaubal" className="button scrolly">Check out Github</a>
                            <a href="https://www.linkedin.com/in/tanushree-chaubal-67770977 " className="button scrolly">LinkedIn Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        )
    }
}