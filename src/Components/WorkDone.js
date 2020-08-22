import React, { Component } from 'react';

export default class WorkDone extends Component {
    render() {
        return (
			<article id="work" className="wrapper style2">
            <div className="container">
                <header>
                    <h2>Technical Skill Set</h2>
                    <p>A summary of knowledge acquired over 7 years in the software industry!</p>
                </header>
                <div className="row aln-center">
                    <div className="col-4 col-6-medium col-12-small">
                        <section className="box style1">
                            <span className="icon solid featured fa fa-laptop"></span>
                            <h3>WEB</h3>
                            <p>Bootstrapping web applications and websites from ground up.</p>
                            <ul>
                                <li>HTML5, CSS3</li>
                                <li>JavaScript</li>
                                <li>React JS</li>
                                <li>Spring MVC</li>
                            </ul>
                        </section>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                        <section className="box style1">
                            <span className="icon solid featured fa-mobile-alt"></span>
                            <h3>MOBILE</h3>
                            <p>Building native and hybrid mobile applications from scratch.</p>
                            <ul>
                                <li>Android (Java)</li>
                                <li>iOS (Objective-C,Swift)</li>
                                <li>Hybrid (React-Native)</li>
                                <li>Published on Store</li>
                            </ul>                        
                        </section>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                        <section className="box style1">
                            <span className="icon solid featured fa fa-cogs"></span>
                            <h3>AUTOMATION</h3>
                            <p>Automation of web, mobile and desktop applications.</p>
                            <ul>
                                <li>Mobile: Appium</li>
                                <li>Web: Selenium/JUnit</li>
                                <li>Mac Desktop: Squish</li>
                                <li>API: Retrofit</li>
                            </ul> 
                        </section>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                        <section className="box style1">
                            <span className="icon solid featured fa fa-database"></span>
                            <h3>DATABASES AND BUILD SYSTEMS</h3>
                            <p>Databases and build automation systems used.</p>
                            <ul>
                                <li>MySQL, DB SQLite</li>
                                <li>MongoDB</li>
                                <li>Maven, Gradle</li>
                            </ul> 
                        </section>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                        <section className="box style1">
                            <span className="icon solid featured fa fa-code-branch"></span>
                            <h3>VERSION CONTROL</h3>
                            <p>Tools used to version, share and contribute code.</p>
                            <ul>
                                <li>Git</li>
                                <li>Bitbucket</li>
                                <li>Sourcetree (Bitbucket)</li>
                                <li>Git (Command line)</li>
                            </ul> 
                        </section>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                        <section className="box style1">
                            <span className="icon solid featured fa fa-users-cog"></span>
                            <h3>DEVELOPMENTAL PROCESSES</h3>
                            <p>Management of collaborative programming in teams.</p>
                            <ul>
                                <li>Agile Methodology</li>
                                <li>Jira and Confluence</li>
                                <li>Kanban Methodology</li>
                            </ul> 
                        </section>
                    </div>
                </div>
                <footer>
                    <p>Ready to check out some recent work?</p>
                    <a href="#portfolio" className="button large scrolly">See Portfolio</a>
                </footer>
            </div>
        </article>
        )
    }
}