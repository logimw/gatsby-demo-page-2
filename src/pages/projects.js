import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import { jobsQuery } from "../components/Jobs"

const ProjectsPage = () => {
  const {
    allStrapiProject: { nodes: projects },
  } = useStaticQuery(projectsQuery)
  return (
    <>
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  )
}
export const projectsQuery = graphql`
  {
    allStrapiProject {
      nodes {
        description
        featured
        id
        github
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          url
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
      totalCount
    }
  }
`

export default ProjectsPage
