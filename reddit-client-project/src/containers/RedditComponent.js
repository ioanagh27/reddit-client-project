import React from "react";
import { useSelector } from "react-redux";

export const RedditComponent = () => {
    const reddits = useSelector((state) => state.allReddits.reddits);
    const renderReddits = reddits.map((reddit) => {
    const {title, ups} = reddit;
    return (<div className="card">
            <div className="title">
                <div className="media">
                    <div className="comments">
                        <div className="App-header">
                            {title}
                            UPS:{ups}
            
                        </div>
                    </div>
                </div>
            </div>
        </div>)})
    
        return renderReddits;
};

export default RedditComponent;