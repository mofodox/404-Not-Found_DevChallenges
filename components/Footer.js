const Footer = (props) => {
    return (
        <div className="footer">
            <p>Khairul Akmal @ DevChallenges.io</p>

            <style jsx>{`
                .footer {
                    position: absolute;
                    bottom: 8px;
                    // border: 1px solid grey;
                    text-align: center;

                    width: 100%;

                    font-family: 'Montserrat', sans-serif;
                }

                .footer > p {
                    font-weight: 600;
                    font-size: 14px;
                    color: #333;
                }
            `}</style>
        </div>
    )
}

export default Footer;
