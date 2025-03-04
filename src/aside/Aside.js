

export default function Aside() {
    return (
        <div className="aside">
            <div className="topics">
                <h2 className="h2">Topics</h2>
                <a href="#" className="topic-btn">
                    <div className="icon-box">
                        <ion-icon name="server-outline" role="img" aria-label="server outline"></ion-icon>
                    </div>
                    <p>Database</p>
                </a>
                <a href="#" className="topic-btn">
                    <div className="icon-box">
                        <ion-icon name="accessibility-outline" role="img" aria-label="accessibility outline"></ion-icon>
                    </div>
                    <p>Accessibility</p>
                </a>
                <a href="#" className="topic-btn">
                    <div className="icon-box">
                        <ion-icon name="rocket-outline" role="img" aria-label="rocket outline"></ion-icon>
                    </div>
                    <p>Web Performance</p>
                </a>
            </div>
            <div className="tags">
                <h2 className="h2">Tags</h2>
                <div className="wrapper">
                    <button className="hashtag">#mongodb</button>
                    <button className="hashtag">#nodejs</button>
                    <button className="hashtag">#a11y</button>
                    <button className="hashtag">#mobility</button>
                    <button className="hashtag">#inclusion</button>
                    <button className="hashtag">#webperf</button>
                    <button className="hashtag">#optimize</button>
                    <button className="hashtag">#performance</button>
                </div>
            </div>
            <div className="contact">
                <h2 className="h2">Let's Talk</h2>
                <div className="wrapper">
                    <p>Do you want to learn more about how I can help your company overcome problems? Let us have a conversation.</p>
                    <ul className="social-link">
                        <li><a href="#" className="icon-box discord"><ion-icon name="logo-discord" role="img" aria-label="logo discord"></ion-icon></a></li>
                        <li><a href="#" className="icon-box twitter"><ion-icon name="logo-twitter" role="img" aria-label="logo twitter"></ion-icon></a></li>
                        <li><a href="#" className="icon-box facebook"><ion-icon name="logo-facebook" role="img" aria-label="logo facebook"></ion-icon></a></li>
                    </ul>
                </div>
            </div>
            <div className="newsletter">
                <h2 className="h2">Newsletter</h2>
                <div className="wrapper">
                    <p>Subscribe to our newsletter to be among the first to keep up with the latest updates.</p>
                    <form action="#">
                        <input type="email" name="email" placeholder="Email Address" required />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
}