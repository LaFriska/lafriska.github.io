import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import '../css/App.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [aboutMe, setAboutMe] = useState('*Loading...*')

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/aboutme.md`)
            .then(res => res.text())
            .then(setAboutMe)
    }, [])

    return (
        <ReactMarkdown className={'page'}>
            {aboutMe}
        </ReactMarkdown>
    )

}