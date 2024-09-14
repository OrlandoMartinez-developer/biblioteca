import { useState } from "react";
export default function Create (){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover]= useState("");
    const [intro, setIntro] = useState("");
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");

    function  handleChange(e){
        const {name, value} = e.target;
        switch(name){
            case "title":
                setTitle(value);
                break;
            case "author":
                setAuthor(value);
                break;
            case "cover":
                setCover(value);
                break;
            case "intro":
                setIntro(value);
                break;
            case "review":
                setReview(value);
                break;
            default:
                break
    }
    return <div>Create</div>
}}