
import React, {useState, useEffect } from "react";
import { API_URL } from "../constants";

function PostsList()
{
    const[Posts, setPosts] = useState([]);
    const[, setLoader] = useState(true);
    const[, setError] = useState(null);
    //fetch Posts from API
    useEffect(() => {
        async function loadPosts(){
            try {
                const response = await fetch(API_URL);
                if(response.ok)
                {
                    const json = await response.json();
                    setPosts(json);
                }else{throw response;}
            }
            catch(e){
                setError("An Error occurred")
                console.log("An Error occurred: ", e);
            }
            finally{
                setLoading(false);
            }
        }
        loadPosts();
    }, []);

    return (
    <div> 
        {Posts.map((post) => (
            <div key={post.id} classname="post-container" >
                <h2>{Posts.title}</h2>
                <p>{Posts.body}</p>
            </div>
        ))}
    </div>
    );
}

export default PostsList;