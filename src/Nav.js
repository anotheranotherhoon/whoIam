import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <section>
            <Link to='/profile'>Profile</Link>
            <Link to='/volunteer'>Volunteer</Link>
        </section>
    )
}

export default Nav;