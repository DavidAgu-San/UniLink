// Imports including the css file
import MatchCard from "../components/MatchCard";
import { matches, posts, events } from "../data/homepagedata";
import "./HomeScreen.css";



const HomeScreen = ({name}) => {
    const initials = name.split(" ").map(word => word[0]).join("").toUpperCase().slice(0, 2);
    return (
    <div className="home-screen">
        <div className="home-header">
            <h1 className="home-logo">UniLink</h1>
            <div className="home-avatar">{initials}</div>
        </div>

        {/**Greeting the user and giving them a little intro to the app*/}
        
        <div className="home-greeting">
            <h2 className="home-greeting-name">Hey, {name}👋</h2>
            <p className="home-greeting-sub">Your next connection might just be a click away!👀</p>
        <div className="home-verified">
            {/**Verified Student ID badge*/}
            <p>✪ Student ID verified⸺ you're in a safe space</p>
        </div>

        </div>

        {/**Displaying the Matches section*/}

        <h2 className="home-section-title">Current Matches</h2>
        <div className="home-matches-row">
            {matches.map((match => (
                <MatchCard key={match.id} {...match} />
            )))}
        </div>

        {/**Displaying the Events section*/}
        
        <h2 className="home-section-title">Campus Events</h2>
        <div className="home-events">
            {events.map((event) => (
                <div key={event.id} className="home-event-card">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-meta">{event.date} <strong>·</strong> {event.time}</p>
                    <p className="event-desc">{event.description}</p>
                    <p className="event-location">Location: {event.location}</p>
                    <p className="event-rsvp">RSVPs: {event.rsvpCount}</p>
                </div>
            ))}
        </div>

    {/**Displaying the Posts section*/}
    
     <h2 className="home-section-title">Campus Buzz</h2>
        <div className="home-posts">
            {posts.map((post) => (
                <div key={post.id} className="home-post-card">
                    <div className="post-top">
                        <div>
                            <div className="post-avatar">{post.initials}</div>
                        </div>
                        <div>
                            <h3 className="post-name">{post.name}</h3>
                            <p className="post-date">{post.date}</p>
                        </div>
                    </div>
                    <p className="post-body">{post.post}</p>
                    <div className="post-actions">
                        <span>❤️ {post.likes}</span>
                        <span>🔁 {post.reposts}</span>
                        <span>💬 {post.comments}</span>
                    </div>
                    
                </div>
            ))}
        </div>     
    </div> 
);
}
export default HomeScreen;