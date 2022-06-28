import { Link } from "react-router-dom";


function Header() {

	return <nav className="blue darken-3">
				<div className="nav-wrapper">
				<Link to="/" className="brand-logo">Food catalog</Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					{/* <li><a href="https://github.com/NumbDV/food-catalog" target='_blank' rel="noreferrer">Repo</a></li> */}
					<li>
					<Link to="about">About</Link>
					</li>
					<li>
					<Link to="contacts">Contacts</Link>
					</li>
				</ul>
				</div>
			</nav>

}

export {Header}