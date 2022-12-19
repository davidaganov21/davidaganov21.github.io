import { Navbar } from "../"
import { Button } from "../../components/"
import styles from "./Header.module.sass"
import cn from "classnames"
import { navLink } from "../../interfaces"

export const Header = (): JSX.Element => {
  const list: navLink[] = [
    { tag: "a", link: "#about", title: "About" },
    { tag: "a", link: "#skills", title: "Skills" },
    { tag: "a", link: "#projects", title: "Projects" }
  ]

  return (
    <header className={styles.header}>
      <div className={cn(styles.inner, "inner")}>
        <Navbar list={list} />

        <div className={styles.content}>
          <div className={cn(styles.blob, styles.first)}></div>
          <div className={cn(styles.blob, styles.second)}></div>
          <div className={cn(styles.blob, styles.third)}></div>

          <p className={styles.subtitle}>Hello, my name is</p>
          <h1 className={styles.title}>
            <strong>David Aganov</strong>I build things for the web
          </h1>
          <p className={styles.description}>
            I’m frontend developer. I like to learn new technologies and try new things in every
            possible way. At the moment I’m working in mobile games studio{" "}
            <a
              className="inline-link"
              href="https://www.linkedin.com/company/sabgames/mycompany/"
              aria-label="The company I work for is SAB Games"
            >
              <svg
                className={styles["link-icon"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.73a1.76 1.76 0 0 1 0-3.53c.97 0 1.75.8 1.75 1.77S7.47 6.73 6.5 6.73zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.76a3.8 3.8 0 0 1 7 2.48V19z" />
              </svg>
              SAB Games
            </a>
          </p>
          <Button
            href="#footer"
            className={styles.btn}
          >
            Contact me
          </Button>
        </div>
      </div>
    </header>
  )
}