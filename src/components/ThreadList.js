import react , {useState} from 'react';
import Tweet from '../../../../app1/src/components/tweet';

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
            content : 'What a bird',
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

    reuturn(
        <div>
            {threads.map(thread =>(
                <Tweet title={threads.title} content={tweets.content} upVote={tweets.upVote} downVote={tweets.downVote} key={tweets.id} />
            ))}
        </div>
    )
}

export default TweetList