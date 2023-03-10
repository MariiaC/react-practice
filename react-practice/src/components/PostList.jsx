import React from "react";
import { PostItem } from "./PostItem";

export const PostList = ({posts,title}) =>{
    
    return(
        <div>
         <h1 style={{textAlign:'xenter'}}> {title}</h1>
      {posts.map((post, index) =>
        <PostItem number={index+1} post={post} key={post.id} />)}
        </div>
    )
}