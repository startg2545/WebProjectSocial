import React , {useState} from 'react';
import Thread from './Thread';

const ThreadList = () => {
    const [threads , setThreads] = useState([
        {
            title : 'Thread name#1',
            content : 'Just trying to create thread',
            upVote : 0,
            downVote : 0,
            id : 0
        },
        {
            title : 'Thread name #2',
            content : `I hear the drums echoing tonight
            But she hears only whispers of some quiet conversation
            She's coming in, 12:30 flight
            The moonlit wings reflect the stars that guide me towards salvation
            I stopped an old man along the way
            Hoping to find some old forgotten words or ancient melodies
            He turned to me as if to say
            "Hurry boy, it's waiting there for you"`,
            upVote : 0,
            downVote : 0,
            id :1
        },
        {
            title : 'Thread name #2',
            content : 'dafuq',
            upVote : 0,
            downVote : 0,
            id :2
        }   
    ]);

    return(
        <div>
            {threads.map(thread =>(
                //<thread title={threads.title} content={threads.content} upVote={threads.upVote} downVote={threads.downVote} key={threads.id} />
                <Thread title={thread.title} content={thread.content}> </Thread>
            ))}
            
        </div>
    )
}

export default ThreadList;