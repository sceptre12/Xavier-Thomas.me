import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./fog.css"

const FogImg = ({ speed, data }) => (
  <Img
    Tag="div"
    style={{
      position: "absolute",
      height: "100%",
      width: "300vw",
      backgroundRepeat: "repeat-x",
      backgroundPosition: "center",
      backgroundSize: "contain",
      animation: `marquee ${speed}s linear infinite`,
    }}
    fluid={data}
  />
)

const Fog = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "fog.png" }) {
        childImageSharp {
          fluid(quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div id="fog-container">
      <FogImg speed={30} data={data.backgroundImage.childImageSharp.fluid} />
      <FogImg speed={20} data={data.backgroundImage.childImageSharp.fluid} />
      <FogImg speed={40} data={data.backgroundImage.childImageSharp.fluid} />
      <FogImg speed={70} data={data.backgroundImage.childImageSharp.fluid} />
      {children}
    </div>
  )
}

export default Fog
