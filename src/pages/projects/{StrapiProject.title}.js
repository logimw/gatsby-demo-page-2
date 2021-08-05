import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export const data = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      title
      description
      image {
        url
      }
    }
  }
`

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  const { description } = data.strapiProject
  return (
    <>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{description}</p>
      </main>
    </>
  )
}

export default ProjectTemplate
