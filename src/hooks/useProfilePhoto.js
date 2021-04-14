import { graphql, useStaticQuery } from "gatsby"

const useProfilePhoto = () => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)

  return query.file.childImageSharp.gatsbyImageData
}

export default useProfilePhoto
