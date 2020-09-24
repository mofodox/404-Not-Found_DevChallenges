const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                { props.navbarBrand }
            </div>

            <style jsx>{`
                .navbar {
                    font-family: 'Inconsolata', monospace;
                    font-weight: bold;
                    position: absolute;
                    padding: 24px;
                    left: 0;
                    right: 0;
                }
            `}</style>
        </div>
    )
}

export default Navbar