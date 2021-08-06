import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const IndexPage = () => {
  const {
    allStrapiProject: { nodes: projects },
  } = useStaticQuery(featuredProjectsQuery)
  return (
    <>
      <Seo title="Home" />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="Featured projects" showLink projects={projects} />
      </main>
    </>
  )
}

export default IndexPage

export const featuredProjectsQuery = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }) {
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
