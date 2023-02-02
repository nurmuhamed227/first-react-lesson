import classes from './Navbar.module.css'

  export  const Navbar = () => {
  return   <nav className={classes.nav}>
  <div className={classes.item}>
    <a>Profile</a>
  </div>
  <div className={classes.item}>
    <a>Players</a>
  </div>
  <div className={classes.item}>
    <a>News</a>
  </div>
  <div className={`${classes.active}`}>
    <a>Transfers</a>
  </div>
  <div className={classes.item}>
    <a>Settings</a>
  </div>

</nav>
    }