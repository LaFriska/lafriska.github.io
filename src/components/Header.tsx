import React from 'react';

const headerStyles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        margin: '1rem',
        color: 'var(--text-colour)',
        fontFamily: "'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif",
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
    },
    link: {
        textDecoration: 'none',
        fontSize: '1rem',
        color: 'var(--text-colour)',
    }
};

export default () => {
    return (
        <header style={headerStyles.container}>
            <div style={headerStyles.logoContainer}>
                <img
                    src="profpic.png"
                    alt="Logo"
                    style={headerStyles.logoImage}
                />
                <div style={headerStyles.logoText}>Harold Gao</div>
            </div>
            <nav style={headerStyles.nav}>
                <a href="#home" style={headerStyles.link}>Home</a>
                <a href="#about" style={headerStyles.link}>About</a>
                <a href="#services" style={headerStyles.link}>Services</a>
                <a href="#contact" style={headerStyles.link}>Contact</a>
            </nav>
        </header>
    );
};
