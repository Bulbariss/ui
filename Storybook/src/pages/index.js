/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
// import SEO from "../components/seo";
// import BackgroundImage from "gatsby-background-image";

function IndexPage() {
  // const { image } = useStaticQuery(graphql`
  //   query {
  //     image: file(relativePath: { eq: "bg-hero.jpg" }) {
  //       sharp: childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);
  /* <BackgroundImage
  className="min-h-screen flex"
  Tag="section"
  fluid={image.sharp.fluid}
  fadeIn="soft"
></BackgroundImage>; */
  // const [centerColumnWidth, setCenterColumnWidth] = useState(0);

  return <Layout>{/* <SEO title="" /> */}</Layout>;
}

export default IndexPage;
