import React, { Component } from 'react';

export default class Skills extends Component {
    render() {
        return (
			<article id="portfolio" className="wrapper style3">
            <div className="container">
                <header>
                    <h2>Some cool apps I have worked on</h2>
                    <p>Here are some web, mobile and desktop apps I have worked on.</p>
                </header>
                <div className="row">
                    <div className="col-4 col-6-medium col-12-small">
                        <article className="box style2">
                            <a href="https://www.quicken.com/" className="image featured"><img src="images/q.png" alt="" /></a>
                            <h3><a href="https://www.quicken.com/">Quicken Inc.</a></h3>
                            <p>Worked on Quicken's mobile app (JavaScript) and Mac desktop app (Objective-C).</p>
                        </article>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                        <article className="box style2">
                            <a href="https://www.docufy.de/en/" className="image featured"><img src="images/docufy.png" alt="" /></a>
                            <h3><a href="https://www.docufy.de/en/">Docufy</a></h3>
                            <p>Worked on Docufy's TopicPilot webapp (Angular) and the TopicPilot iOS app (Objective-C).</p>
                        </article>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                        <article className="box style2">
                            <a href="http://www.copious.care/#" className="image featured"><img src="images/copious.png" alt="" /></a>
                            <h3><a href="http://www.copious.care/#">Copious Healthcare</a></h3>
                            <p>Worked on Copious's hybrid mobile app (iOS and Android - React-Native) with successful delivery to app/play stores.</p>
                        </article>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                        <article className="box style2">
                            <a href="https://picnplace.me/" className="image featured"><img src="images/picnplace.png" alt="" /></a>
                            <h3><a href="https://picnplace.me/">PicnPlace</a></h3>
                            <p>Worked on PicnPlace's hybrid mobile app (React-Native) with successful delivery to app/play stores.</p>
                        </article>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                        <article className="box style2">
                            <a href="https://www.ocean-bytes.com/" className="image featured"><img src="images/o.png" alt="" /></a>
                            <h3><a href="https://www.ocean-bytes.com/">OceanBytes</a></h3>
                            <p>Worked on OceanBytes's hybrid (iOS and Android - React-Native) and native (Android) marine navigation mobile app.</p>
                        </article>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                        <article className="box style2">
                            <a href="https://github.com/tchaubal" className="image featured"><img src="images/cert.png" alt="" /></a>
                            <h3><a href="https://github.com/tchaubal">Certifications</a></h3>
                            <p>Successful completion of Google's Online Android Foundation  Nanodegrees.</p>
                        </article>
                    </div>
                </div>
                <footer>
                    <p>Got some questions/feedback for me?</p>
                    <a href="#contact" className="button large scrolly">Get in touch with me</a>
                </footer>
            </div>
        </article>
        )
    }
}