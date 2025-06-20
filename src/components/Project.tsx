import '../css/App.css';
import ProjectTag from "./ProjectTag";
import {TagColour} from "./ProjectTag";

export default ({name, description, date, tags}: { name: string, description: string, date: string, tags: string[] }) => {

    const containerStyle = {
        backgroundColor: 'var(--embed-gray)',
        borderLeft: '4px solid var(--text-colour)',
        borderRadius: '3px',
        padding: '10px 15px',
        margin: '1rem 0',
        gap: '10px'
    }

    const textContainerStyle = {
        marginLeft: '15px'
    }

    const footerStyle = {
        marginTop: '10px',
        fontSize: '0.75rem',
        color: 'var(--border-gray)'
    }

    const tagContainerStyle = {}

    const tagListStyle = {
        display: 'flex'
    }

    return ( //A compact and convenient JSON serialiser for Java, aimed to resolve verbosity of libraries such as Gson.
        <div style={containerStyle}>
            <div style={textContainerStyle}>
                <h3 className={'projectText'}>{name}</h3>
                <p> {description} </p>
                <div style={tagContainerStyle}>
                    {createTags(tags)}
                </div>
                <div style={footerStyle}>
                    {date}
                </div>
            </div>
        </div>
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
            return <ProjectTag colour={TagColour.Purple}>Computer Architecture</ProjectTag>;
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