/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Fog from "./fog/fog"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "forestD.jpg" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 2500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const [hasImageLoaded, setImageLoaded] = useState(false)

  return (
    <BackgroundImage
      Tag="section"
      id="layout"
      onLoad={() => setImageLoaded(true)}
      fluid={data.backgroundImage.childImageSharp.fluid}
    >
      {!!hasImageLoaded ? <Fog>{children}</Fog> : null}
    </BackgroundImage>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
