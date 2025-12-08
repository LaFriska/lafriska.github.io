import React from 'react';
import SectionLink from "./SectionLink";
import Logo from "./Logo";
import {Page} from "./App";

const styles = {
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: `1rem`,
        paddingBottom: `1rem`,
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
                <a
                    href={"https://docs.google.com/document/d/1cRvE7bLuGK2FRxGdd8eCo8lvJHPJ79gVltBQ72_ruWg/edit?usp=sharing"}
                    target={"_blank"}
                    style={{textDecoration:"none"}}
                >
                    <SectionLink onClick={()=>{}} text={"CV"}/>
                </a>
            </nav>
        </header>
    );
};
