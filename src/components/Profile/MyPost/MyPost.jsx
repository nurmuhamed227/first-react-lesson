  import classes from './MyPost.module.css'
import { Post } from './Post/Post'
  export  const MyPost = () => {
  return    <div>
      my post
      <div>
        new post
      </div>
      <div className={classes.posts}>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
      </div>
    </div>
  
    } 