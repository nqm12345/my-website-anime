import React from "react";
import './Contact.css';
const Contact = () => {
    const backgroundImage = "/images/blog_bg.jpg";
    const backgroundMap = "/images/map.png";
    return (
        <div>
            <section
                className="contact-area contact-bg"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="contact-form-wrap">
                                <div className="widget-title mb-50">
                                    <h5 className="title">Contact Form</h5>
                                </div>
                                <div className="contact-form">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" placeholder="You Name *" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" placeholder="You  Email *" />
                                            </div>
                                        </div>
                                        <input type="text" placeholder="Subject *" />
                                        <textarea
                                            name="message"
                                            placeholder="Type Your Message..."
                                            defaultValue={""}
                                        />
                                        <button className="btn">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="widget-title mb-50">
                                <h5 className="title">Information</h5>
                            </div>
                            <div className="contact-info-wrap">
                                <p>
                                    <span>Find solutions :</span> to common problems, or get help from a
                                    support agent industry's standard .
                                </p>
                                <div className="contact-info-list">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt" />
                                            </div>
                                            <p>
                                                <span>Address :</span> W38 Park Road New York
                                            </p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone-alt" />
                                            </div>
                                            <p>
                                                <span>Phone :</span> (09) 123 854 365
                                            </p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <p>
                                                <span>Email :</span>{" "}
                                                <a
                                                    href="https://themebeyond.com/cdn-cgi/l/email-protection"
                                                    className="__cf_email__"
                                                    data-cfemail="40333530302f3234002d2f36262c386e232f2d"
                                                >
                                                    [email&nbsp;protected]
                                                </a>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="map" style={{ backgroundImage: `url(${backgroundMap})` }} />
        </div>
    )
};
export default Contact;