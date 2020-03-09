import React from "react"
import Container from "@material-ui/core/Container"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Box from "@material-ui/core/Box"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

export default function LifeTimeline() {
  const data = useStaticQuery(graphql`
    query {
      allExperiencesJson {
        edges {
          node {
            title
            subtitle
            description
            date
            logo {
              childImageSharp {
                fixed(width: 64, height: 64) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      allEducationsJson {
        edges {
          node {
            title
            subtitle
            description
            date
            logo {
              childImageSharp {
                fixed(width: 64, height: 64) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container maxWidth={"lg"}>
      <VerticalTimeline layout="1-column">
        {data.allExperiencesJson.edges.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            // date={item.node.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Box display="flex">
              <Img
                fixed={
                  item.node.logo
                    ? item.node.logo.childImageSharp.fixed
                    : "https://via.placeholder.com/64"
                }
                alt={item.node.title}
                style={{ width: 64, height: 64 }}
              />
              <Box
                paddingLeft="2rem"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <h3 className="vertical-timeline-element-title">
                  {item.node.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.node.subtitle}
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.node.date}
                </h4>
              </Box>
            </Box>
            <p>{item.node.description}</p>
          </VerticalTimelineElement>
        ))}
        {data.allEducationsJson.edges.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            // date={item.node.date}
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <Box display="flex">
              <Img
                fixed={item.node.logo.childImageSharp.fixed}
                alt={item.node.title}
              />
              <Box
                paddingLeft="2rem"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <h3 className="vertical-timeline-element-title">
                  {item.node.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.node.subtitle}
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.node.date}
                </h4>
              </Box>
            </Box>
            <p>{item.node.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  )
}
