import React, {useState} from 'react';
import '../css/App.css';
import Header from "./Header";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Projects from "./Projects";

export enum Page {
    AboutMe = 'aboutMe',
    Projects = 'projects',
    Education = 'education'
}

export default () => {

    const [page, setPage] = useState<Page>(Page.AboutMe);

    let content

    switch (page){
        case Page.Education:
            content = <Education/>
            break;
        case Page.Projects:
            content = <Projects/>
            break;
        default:
            content = <AboutMe/>
    }

    const style = {
        margin: '1rem 8rem'
    }

    return (
        <div className="app" style={style}>
            <Header pageSetter={setPage} />
            {content}
        </div>
    );
}
