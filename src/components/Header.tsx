import React from 'react';
import SectionLink from "./SectionLink";

const headerStyles = {
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        margin: '1rem',
        color: 'var(--text-colour)',
        fontFamily: "'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif",
        borderBottom: '1px solid #ccc'
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
    },
    logoImage: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
    },
    logoText: {
        fontSize: '2rem',
        fontWeight: 'bold',
    },
    nav: {
        display: 'flex',
        gap: '2rem',
    }
};

export default () => {
    return (
        <header style={headerStyles.container}>
            <div style={headerStyles.logoContainer}>
                <a href={"index.html"}>
                    <img
                        src="profpic.png"
                        alt="Logo"
                        style={headerStyles.logoImage}
                    />
                </a>
                <div style={headerStyles.logoText}>Harold Gao</div>
            </div>
            <nav style={headerStyles.nav}>

                <SectionLink onClick={() => {}} text={"About Me"} />
                <SectionLink onClick={() => {}} text={"Projects"} />
                <SectionLink onClick={() => {}} text={"Education"} />
                <SectionLink onClick={() => {}} text={"Contact"} />
            </nav>
        </header>
    );
};
