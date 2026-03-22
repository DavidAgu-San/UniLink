import MatchCard from "../components/MatchCard";
import { matches, posts, events } from "../data/homepagedata";




const HomeScreen = ({name}) => {
    const initials = name.split(" ").map(word => word[0]).join("").toUpperCase().slice(0, 2);
return (
    <div>
        <h1>UniLink</h1>
            <div>{initials}</div>

        {/**Greeting the user and giving them a little intro to the app*/}
        
        <h2>Hey, {name}👋</h2>
        <p>Your next connection might just be a click away!👀</p>
        <div>
            {/**Verified Student ID badge*/}
            <p>✪ Student ID verified⸺ you're in a safe space</p>
        </div>

        {/**Displaying the Matches section*/}

        <h2>Current Matches</h2>
        <div>
            {matches.map((match => (
                <MatchCard key={match.id} {...match} />
            )))}
        </div>

        {/**Displaying the Events section*/}
        
        <h2>Campus Events</h2>
        <div>
            {events.map((event) => (
                <div key={event.id}>
                    <h3>{event.title}</h3>
                    <p>{event.date} <strong>·</strong> {event.time}</p>
                    <p>{event.description}</p>
                    <p>Location: {event.location}</p>
                    <p>RSVPs: {event.rsvpCount}</p>
                </div>
            ))}
        </div>

    {/**Displaying the Posts section*/}
    
     <h2>Campus Buzz</h2>
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.name} ({post.initials})</h3>
                    <p>{post.post}</p>
                    <p>{post.date}</p>
                    <p>Likes: {post.likes} <strong>·</strong> Reposts: {post.reposts} <strong>·</strong> Comments: {post.comments}</p>
                </div>
            ))}
        </div>     
    </div> 
);
}
export default HomeScreen;