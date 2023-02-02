  import { MyPost } from './MyPost/MyPost'
import classes from './Profile.module.css'
  export  const Profile = () => {
  return   <div className={classes.content}>
  <div>
<img src='https://tengrinews.kz/userdata/news/2020/news_396159/resize/photo_313747.jpeg'/>
</div>
<div className={classes.photo}>
</div>
    <MyPost/>
</div>
  
    } 