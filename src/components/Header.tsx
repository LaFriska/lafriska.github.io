import React from 'react';
import SectionLink from "./SectionLink";
import Logo from "./Logo";
import {Page} from "./App";

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

export default ({pageSetter}: any) => {
    return (
        <header style={styles.container}>
            <Logo/>
            <nav style={styles.nav}>
                <SectionLink onClick={() => {pageSetter(Page.AboutMe)}} text={"About Me"} />
                <SectionLink onClick={() => {pageSetter(Page.Projects)}} text={"Projects"} />
                <SectionLink onClick={() => {pageSetter(Page.Education)}} text={"Education"} />
            </nav>
        </header>
    );
};
