import React from 'react';
import SectionLink from "./SectionLink";
import Logo from "./Logo";

const styles = {
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 40px',
        margin: '1rem',
        borderBottom: '1px solid #ccc',
    },
    nav: {
        display: 'flex',
        gap: '2rem',
    }
};

export default () => {
    return (
        <header style={styles.container}>
            <Logo/>
            <nav style={styles.nav}>

                <SectionLink onClick={() => {}} text={"About Me"} />
                <SectionLink onClick={() => {}} text={"Projects"} />
                <SectionLink onClick={() => {}} text={"Education"} />
                <SectionLink onClick={() => {}} text={"Contact"} />
            </nav>
        </header>
    );
};
