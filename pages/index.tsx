import React from 'react'

import containerStyles from '../styles/container.module.scss'
import indexStyles from '../styles/index.module.scss'

const { container } = containerStyles

const {
  index,
  index__title,
  index__subtitle,
  index__resume,
  index__networks,
  index__networks__item
} = indexStyles

const networks = [
  { title: 'Linkedin', href: 'https://www.linkedin.com/in/flaranda' },
  { title: 'Twitter', href: 'https://www.twitter.com/flaranda' },
  { title: 'Github', href: 'https://www.github.com/flaranda' },
  { title: 'Instagram', href: 'https://www.instagram.com/flaranda' },
]

const Index = () => (
  <main className={index}>
    <section className={container}>
      <h1 className={index__title}>
        Hi!
        <sub className={index__subtitle}>
          My name is Fran,
        </sub>
        <sub className={index__subtitle}>
          Software Engineer.
        </sub>
      </h1>
      <p className={index__resume}>
        I've been passionate about technology since I was a kid. I enjoy designing and developing tech-based products, getting involved in business processes and iterating to fit the user needs.
      </p>
      <p className={index__resume}>
        My top 5 buzzwords: Node, React, Next.js, Ruby, Golang.
      </p>
      <div className={index__networks}>
        {networks.map(({ title, href }) => (
          <span className={index__networks__item} key={title}>
            <a href={href} target="blank">
              {title}
            </a>
          </span>
        ))}
      </div>
    </section>
  </main>
)

export default Index
