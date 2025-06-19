import '../css/App.css';
import Projects from "./Projects";
import Project from "./Project";

export default () => {

    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem'

    }

    return (
        <div className={'page'} style={style}>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    )
}