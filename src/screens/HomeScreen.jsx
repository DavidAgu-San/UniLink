// Imports including the css file
import MatchCard from "../components/MatchCard";
import { matches, posts, events } from "../data/homepagedata";
import "./HomeScreen.css";
import { useState } from "react";


const PostCard = ({ id, name, initials, post, date, likes, reposts, comments, avatarColor }) => {
  const [liked, setLiked] = useState(false)
  const [reposted, setReposted] = useState(false)
  const [commented, setCommented] = useState(false)

  return (
    <div className="home-post-card">
      <div className="post-top">
        <div className="post-avatar" style={{ background: avatarColor || "linear-gradient(135deg, #6C63FF, #A78BFA)" }}>
          {initials}
        </div>
        <div>
          <h3 className="post-name">{name}</h3>
          <p className="post-date">{date}</p>
        </div>
      </div>
      <div className="post-strip" />
      <p className="post-body">{post}</p>
      <div className="post-actions">

        {/* Like button */}
        <span
          className={liked ? "post-action active-like" : "post-action"}
          onClick={() => setLiked(!liked)}
        >
          {liked ? "❤️" : "🤍"} {liked ? likes + 1 : likes}
        </span>

        {/* Repost button */}
        <span
          className={reposted ? "post-action active-repost" : "post-action"}
          onClick={() => setReposted(!reposted)}
        >
          {reposted ? "🔁" : "↩️"} {reposted ? reposts + 1 : reposts}
        </span>

        {/* Comment button */}
        <span
          className={commented ? "post-action active-comment" : "post-action"}
          onClick={() => setCommented(!commented)}
        >
          {commented ? "💬" : "🗨️"} {comments}
        </span>

      </div>
    </div>
  )
}



const HomeScreen = ({name, onSeeAllMatches}) => {
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
        </div>
         <div className="home-verified">
            {/**Verified Student ID badge*/}
            <p>✪ Student ID verified⸺ you're in a safe space</p>
        </div>
        <div className="home-progress-card">
            <div className="progress-section">
                <div className="progress-top">
                <span className="progress-title">Build your profile!</span>
                <span className="progress-pct">40%</span>
                </div>
                <div className="progress-bar">
                <div className="progress-fill" />
                </div>
                <p className="progress-sub">Add interests for better matches to unlock</p>
            </div>
        </div>

        {/* Stories */}
        <h2 className="home-section-title">Campus Stories</h2>
        <div className="home-stories-row">
        <div className="story-item">
            <div className="story-ring story-add">
            <div className="story-inner">+</div>
            </div>
            <span className="story-label">Add yours</span>
        </div>
        {matches.map(match => (
            <div key={match.id} className="story-item">
            <div className="story-ring" style={{ background: match.color}}>
                <div className="story-inner" style={{ fontSize: "13px", color: "#6C63FF" }}>
                {match.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
            </div>
            <span className="story-label">{match.name.split(" ")[0]}</span>
            </div>
        ))}
        </div>


        {/**Displaying the Matches section*/}
        <div className="home-section-header">
             <h2 className="home-section-title">Current Matches</h2>
             <span
             className="home-see-all"
             onClick={onSeeAllMatches}>See all</span>
        </div>

       
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
                    <p className="event-meta">📅 {event.date} · 🕐 {event.time}</p>
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
            <PostCard key={post.id} {...post} />
        ))}
        </div>
</div>
    
);
}
export default HomeScreen;