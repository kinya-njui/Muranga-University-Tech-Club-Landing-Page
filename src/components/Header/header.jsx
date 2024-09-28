import './header.css'

 function Navigation() {
  return (
    <div className="nav-bar">
        <h3 className='header-tittle'>MUTC</h3>
        <nav>
            <ol className="navigationlist">
                <li><a href="#">home</a></li>
                <li><a href="#">Leadership</a></li>
                <li><a href="#">Track</a></li>
                <li><a href="#">Event</a></li>
            </ol>
        </nav>
    </div>
  )
}



function Header() {
  return (
    <Navigation/>
  )

}

export default Header