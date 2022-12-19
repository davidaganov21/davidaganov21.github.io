import { useTranslation } from "react-i18next"
import { HeaderProps } from "./Header.props"
import { Navbar } from "../"
import { Button } from "../../components/"
import styles from "./Header.module.sass"
import cn from "classnames"

export const Header = ({ list, ...props }: HeaderProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <header
      className={styles.header}
      {...props}
    >
      <div className={cn(styles.inner, "inner")}>
        <Navbar list={list} />

        <div className={styles.content}>
          <div className={cn(styles.blob, styles.first)}></div>
          <div className={cn(styles.blob, styles.second)}></div>
          <div className={cn(styles.blob, styles.third)}></div>

          <p className={styles.subtitle}>{t("header.subtitle")}</p>
          <h1 className={styles.title}>
            <strong>{t("header.name")}</strong>
            {t("header.slogan")}
          </h1>
          <p className={styles.description}>
            {t("header.description") + " "}
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
            {t("header.contact")}
          </Button>
        </div>
      </div>
    </header>
  )
}
