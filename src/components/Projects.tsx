import '../css/App.css';
import Project from "./Project";
import {project} from "./Project";
import {useEffect, useState} from "react";

export default () => {

    const [projects, setProjects] = useState<project[]>([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/json/projects.json`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load JSON");
                return res.json();
            })
            .then(setProjects)
            .catch((err) => console.error("Error loading JSON:", err));
    }, [])

    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem'
    }

    return (
        <div className={'page'} style={style}>
            {
                projects.map((current, i) => {
                    return <span key={i}> <Project proj={current} /> </span>
                })
            }
        </div>
    )
}