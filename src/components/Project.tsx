import '../css/App.css';
import ProjectTag from "./ProjectTag";
import {TagColour} from "./ProjectTag";
import ReactMarkdown from "react-markdown";

export type project = { name: string, description: string, date: string, tags: string[], link: string }

export default ({proj}: {proj: project}) => {

    const containerStyle = {
        backgroundColor: 'var(--embed-gray)',
        borderLeft: '4px solid var(--text-colour)',
        borderRadius: '3px',
        padding: '10px 15px',
        margin: '1rem 0',
        gap: '10px',
        marginLeft: '15px',
    }

    const anchorStyle = {
        textDecoration: 'none',
        color: 'inherit'
    };

    const footerStyle = {
        marginTop: '10px',
        fontSize: '0.75rem',
        color: 'var(--border-gray)'
    }
//https://www.researchgate.net/publication/392693096_Six_Years_of_Neural_Distinguishers_Implications_on_Cryptanalysis_of_Advanced_Encryption_Standard

    return ( //A compact and convenient JSON serialiser for Java, aimed to resolve verbosity of libraries such as Gson.
        <a href={proj.link}
           style={anchorStyle}
           target="_blank"
        >
            <div style={containerStyle}>
                <h3 className={'projectText'}>{proj.name}</h3>
                <ReactMarkdown>{proj.description}</ReactMarkdown>
                <div>
                    {createTags(proj.tags)}
                </div>
                <div style={footerStyle}>
                    {proj.date}
                </div>
            </div>
        </a>
    )
}


function createTags(types: string[]) {
    return (
        <div className="tagContainer">
            {types.map((type, index) => (
                <span style={{marginRight: '0.25rem', marginBottom: '0.25rem'}} key={index}>{createTag(type)}</span>
            ))}
        </div>
    );
}


function createTag(type: string) {

    type = type.toLowerCase();

    switch (type) {
        case "se":
            return <ProjectTag colour={TagColour.Yellow}>Software</ProjectTag>;
        case "ca":
            return <ProjectTag colour={TagColour.Purple}>Systems & Architecture</ProjectTag>;
        case "cs":
            return <ProjectTag colour={TagColour.Blue}>Cybersecurity</ProjectTag>;
        case "ml":
            return <ProjectTag colour={TagColour.Green}>Machine Learning</ProjectTag>;
        case "re":
            return <ProjectTag colour={TagColour.Red}>Research</ProjectTag>;
        default:
            return <ProjectTag colour={TagColour.Gray}>Other</ProjectTag>;
    }

}