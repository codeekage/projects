import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
       <footer>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="info">
                            <h5 className="lead">Company</h5>
                            <li className="info-item">
                                <a href="/somewhere">About</a>
                            </li>
                            <li className="info-item">
                                <a href="/somewhere">Career</a>
                            </li>
                            <li className="info-item">
                                <a href="/somewhere">Blog</a>
                            </li>
                            <li className="info-item">
                                <a href="/somewhere">Affiliates</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="info">
                            <h5 className="lead">Community</h5>
                            <li className="info-item">
                                <a href="/somewhere">Refer a Friend</a>
                            </li>
                            <li className="info-item">
                                <a href="/somewhere">Gift Cards</a>
                            </li>
                            <li className="info-item">
                                <a href="/somewhere">Scholarship</a>
                            </li>
                            <li className="info-item">
                                <a href="/somewhere">Free classNamees</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="info">
                            <h5 className="lead">Sponorship</h5>
                            <li className="info-item">
                                <a href="/somewhere">Become a Sponrs</a>
                            </li>
                            <li className="info-item">
                                <a href="/somewhere">Sponors Academy</a>
                            </li>
                            <li className="info-item">
                                <a href="/somewhere">Sponor Handbook</a>
                            </li>
                            <li className="info-item">
                                <a href="/somewhere">Partnership</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="info">
                            <h5 className="lead">Mobile</h5>
                            <li className="mobile-item mb-2">
                                <a className="btn btn-lg btn-gray">
                                    <i className="fab fa-apple"></i> App Store
                                </a>
                            </li>
                            <li className="mobile-item">
                                <a className="btn btn-lg btn-gray">
                                    <i className="fab fa-google-play"></i> Google Play
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr/>
                <ul className="list-inline fnt-sm">
                    <li className="list-inline-item">
                        &copy; Dshaw Vlog</li>
                    <li className="list-inline-item">
                        Help</li>
                    <li className="list-inline-item">
                        Privacy</li>
                    <li className="list-inline-item">
                        Terms</li>
                    <li className="list-inline-item float-right ">
                        <a href="/somewhere" className="btn btn-sm btn-rounded btn-outline-gray">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="/somewhere" className="btn btn-sm btn-rounded btn-outline-gray">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/somewhere" className="btn btn-sm btn-rounded btn-outline-gray">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="/somewhere" className="btn btn-sm btn-rounded btn-outline-gray">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    )
  }
}
