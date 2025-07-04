import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import ImageGallery from "./ImageGallery";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default () => {
    const [education, setEducation] = useState('*Loading...*')

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/md/education.md`)
            .then(res => res.text())
            .then(setEducation)
    }, [])

    const paths: string[] = [
        "img/academic1.jpg",
        "img/academic2.jpg",
        "img/canberra.jpg"
    ];



    return (
        <div style={{ display: 'flex' }}>
            <div className={'page'}>
                <ReactMarkdown className={"clean-tables"} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {education}
                </ReactMarkdown>
            </div>
            <ImageGallery paths={paths}/>
        </div>
    )
}