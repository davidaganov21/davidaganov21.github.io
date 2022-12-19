import { CardProps } from "./Card.props"
import styles from "./Card.module.sass"
import cn from "classnames"

export const Card = ({ card, className }: CardProps): JSX.Element => {
  const { name, description, html_url, topics, homepage } = card
  const clearName = name.replace(/[.\-/\\\s]/g, " ")

  const renderTags = () => {
    const items = topics.map((tag, i) => {
      return <li key={i}>{tag}</li>
    })

    return <ul className={styles.tags}>{items}</ul>
  }

  const renderDemo = () => {
    if (homepage) {
      return (
        <a
          href={homepage}
          className={cn(styles.link, styles["link--live"], "inline-link")}
          target="_blank"
          rel="noreferrer"
          aria-label={`Live demo ${clearName}`}
        >
          Live demo
        </a>
      )
    }
  }

  const tags = renderTags()
  const demo = renderDemo()

  return (
    <li className={cn(styles.project, className)}>
      <h3 className={styles.title}>{clearName}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.bottom}>
        <a
          href={html_url}
          className={cn(styles.link, "inline-link")}
          target="_blank"
          rel="noreferrer"
          aria-label={`Go to the repository ${clearName}`}
        >
          Go to repository
        </a>
        {demo}
        {tags}
      </div>
    </li>
  )
}