import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const style = {
  landing: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
    height: "inherit",
    width: "inherit",
    overflow: "hidden",
  },
  title: {
    fontFamily: "columbia",
    fontSize: "12vw",
    color: "rgba(224, 117, 52, 0.85)",
  },
  main: {
    maxWidth: "70vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxHeight: "80%",
    padding: 30,
    borderRadius: "87px 87px 87px 87px",
    backgroundColor: "rgba(0, 0, 0, 0.29)",
    boxShadow: "0px 0px 300px -10px rgba(0,0,0,0.75)",
  },
  subTitle: {
    fontSize: "3vw",
    fontFamily: "Test",
    color: "#e6e6e6a8",
  },
  textColor: {
    color: "white",
  },
  mainText: {
    fontFamily: "Test",
    fontSize: "15px",
  },
  divide: {
    borderLeft: 2,
    borderLeftStyle: "solid",
    borderLeftColor: "white",
    height: 25,
  },
  iconList: {
    width: 200,
    display: "flex",
    zIndex: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={style.landing}>
      <h1 className={"fadeInUp"} style={style.title}>
        Xavier Thomas
      </h1>
      <h3 style={{ ...style.textColor, ...style.subTitle }}>
        &lt;&nbsp; Software Engineer | Dog Lover | Woodsman &nbsp;&frasl; &gt;
      </h3>
      <main style={{ ...style.main, ...style.mainText }}>
        <p style={style.textColor}>
          I'm a dog loving, javascript loving, jeep loving outdoors guy. I'm
          very passionate about technology. My goal is to one day be able to not
          only have built tools for a spaceship, but to also be able to build
          technology that can assist folks in disaster relief zones.
        </p>
        <p style={style.textColor}>
          How close am I to those goals? I've developed interfaces for pet
          shelters, tools for submarines, and engineered components for
          satellites. I missed the spaceship part.. but we'll get there soon.
        </p>
        <p style={style.textColor}>
          These days, I'm a Tech Lead / Product Owner at LM
        </p>
        <p style={style.textColor}>If you want to chat, you can find me at: </p>
        <div style={style.iconList}>
          <a href="https://github.com/sceptre12">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              color="rgba(224, 117, 52, 0.85)"
            />
          </a>
          <div style={style.divide} />
          <a href="www.linkedin.com/in/xavier-thomas-me">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              color="rgba(224, 117, 52, 0.85)"
            />
          </a>
          <div style={style.divide} />
          <a href="https://twitter.com/Zaeboi222">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              color="rgba(224, 117, 52, 0.85)"
            />
          </a>
        </div>
      </main>
    </div>
  </Layout>
)

export default IndexPage
