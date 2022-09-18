import React ,{useState,useContext} from "react";
import { ThreadContext } from "./ThreadContext";
import './AddThread.css';

const AddThread = () =>{
    const [title , setTitle] = useState();
    const [content , setContent] = useState();
    const [threads, setThreads] = useContext(ThreadContext);

    const updateTitle = (e) => {
        setTitle(e.target.value);
    }

    const updateContent = (e) => {
        setContent(e.target.value);
    }

    const addThread = e => {
        e.preventDefault();
        setThreads(prevThreads => [...prevThreads, {title : title, content : content}]); // make copy of previous object
    };
    return (
        <div className="firstdiv">
        <form className="frameadd" onSubmit={addThread}>
            <p>Thread name :</p>
            <input className="inputbox1"
            type="text" 
            name="title" 
            value={title} 
            onChange={updateTitle}/><br/>

            <p>Thread content :</p>
            <input className="inputbox2"
            type="text" 
            name="content" 
            value={content} 
            onChange={updateContent}/>
            <br/>
            <button>Submit</button>
        </form>
        </div>
    );
};

export default AddThread;