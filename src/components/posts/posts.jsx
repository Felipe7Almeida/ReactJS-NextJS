import './posts.css';


import { PostCard } from "../PostCard/postcard";

export const Posts = ({ posts }) => (
    <div className="posts">
        {posts.map((post) => (
            <PostCard post={post} key={post.id} />
        ))}
    </div>
);
