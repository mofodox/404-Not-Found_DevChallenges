import Link from 'next/link';
import Footer from '../components/Footer';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const IndexPage = () => {
    return (
        <>
            <Navbar navbarBrand="404 Not Found" />
            
            <Layout>
                <div className="main">
                    <div className="img-container">
                        <img src="/Scarecrow.png" id="scarecrow" className="img-responsive" />
                    </div>

                    <div className="copy-side">
                        <h1 className="title">I have a bad news for you</h1>

                        <p className="subtitle">
                            The page you are looking for might be removed or is temporarily unavailable
                        </p>

                        <Link href="/">
                            <a className="btn btn-dark">
                                Back to Homepage
                            </a>
                        </Link>
                    </div>
                </div>
            </Layout>

            <Footer />

            <style jsx>{`
                .img-responsive {
                    max-width: 100%;
                    height: auto;
                }

                .main {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    // border: 1px solid red;

                    height: 100vh;
                }

                .img-container {
                    width: 580px;
                    height: 482px;

                    padding-right: 32px;
                }

                .title {
                    font-weight: 700;
                    font-size: 64px;
                    width: 640px;
                    font-family: 'Space Mono', cursive;

                    line-height: 95px;
                    letter-spacing: -0.035em;
                }

                .subtitle {
                    font-size: 24px;
                    width: 396px;
                    line-height: 35.54px;
                    letter-spacing: -0.035em;

                    color: #4F4F4F;

                    margin-bottom: 64px;
                }

                .btn {
                    padding: 24px;
                    color: white;
                    text-decoration: none;
                }

                .btn-dark {
                    background-color: #333333;
                }

                // Extra small devices (portrait phones, less than 576px)
                @media (max-width: 575.98px) {
                    .main {
                        flex-direction: column;
                        margin: 0 24px;
                    }

                    .title {
                        font-size: 48px;
                        margin-right: auto;
                        margin-left: auto;
                        width: 100%;
                        line-height: 72px;
                    }

                    .subtitle {
                        font-size: 18px;
                    }

                    .img-container {
                        padding-right: 0;
                        width: 100%;
                        height: 375px;
                    }
                }
            `}</style>

            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0; 
                    font-family: 'Space Mono', monospace;
                }
            `}</style>
        </>
    )
}

export default IndexPage