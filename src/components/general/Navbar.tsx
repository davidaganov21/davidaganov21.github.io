export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <span>01.</span>
          <a
            href="#about"
            className="navbar__link inline-link inline-link--white"
          >
            {" "}
            About
          </a>
        </li>
        <li className="navbar__item">
          <span>02.</span>
          <a
            href="#skills"
            className="navbar__link inline-link inline-link--white"
          >
            {" "}
            Skills
          </a>
        </li>
        <li className="navbar__item">
          <span>03.</span>
          <a
            href="#projects"
            className="navbar__link inline-link inline-link--white"
          >
            {" "}
            Projects
          </a>
        </li>
      </ul>
    </nav>
  )
}