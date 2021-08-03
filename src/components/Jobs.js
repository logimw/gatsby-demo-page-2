import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

export const jobsQuery = graphql`
  {
    allStrapiJob {
      nodes {
        id
        date
        position
        company
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const {
    allStrapiJob: { nodes: jobs },
  } = useStaticQuery(jobsQuery)
  console.log(jobs)
  return <h2>jobs component</h2>
}

export default Jobs
