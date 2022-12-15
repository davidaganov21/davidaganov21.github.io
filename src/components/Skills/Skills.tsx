import styles from "./Skills.module.sass"
import cn from "classnames"

import Collapsible from "react-collapsible"
import { Title } from "../"
import data from "../../data"

import { ReactComponent as HTMLIcon } from "./html.svg"
import { ReactComponent as CSSIcon } from "./css.svg"
import { ReactComponent as JSIcon } from "./js.svg"
import { ReactComponent as OtherIcon } from "./other.svg"

export const Skills = (): JSX.Element => {
  const { skills } = data

  const setIcon = (title: string) => {
    switch (title) {
      case "HTML":
        return <HTMLIcon />
      case "CSS":
        return <CSSIcon />
      case "JavaScript":
        return <JSIcon />
      default:
        return <OtherIcon />
    }
  }

  const buildSkills = () => {
    const categories = skills.map(({ id, title, list }) => {
      return (
        <Collapsible
          trigger={
            <h3>
              {title}
              {setIcon(title)}
            </h3>
          }
          classParentString={styles.item}
          triggerElementProps={{ id: `trigger-${id}` }}
          contentElementId={`content-${id}`}
          transitionTime={350}
          easing={"ease-in-out"}
          key={id}
          tabIndex={0}
        >
          <ul className={styles.list}>{buildItems(list)}</ul>
        </Collapsible>
      )
    })

    return <div className={styles.accordion}>{categories}</div>
  }

  const buildItems = (list: { id: string; title: string; tag: string[] }[]) => {
    return list.map(({ id, title, tag }) => {
      return (
        <li
          className={styles.content}
          key={id}
        >
          <p className={styles.title}>{title}</p>
          <ul className={styles.listNested}>{buildTags(tag)}</ul>
        </li>
      )
    })
  }

  const buildTags = (tag: string[]) => {
    return tag.map((skill) => {
      return (
        <li
          className={styles.listNestedItem}
          key={skill}
        >
          {skill}
        </li>
      )
    })
  }

  return (
    <section
      className={cn(styles.skills, "section-rtl")}
      id="skills"
    >
      <div className="inner">
        <Title
          number={2}
          link="#skills"
          title="My Skills"
          direction="rtl"
        />

        {buildSkills()}
      </div>
    </section>
  )
}
