import { graphql, useStaticQuery } from "gatsby"

const useProfilePhoto = () => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return query.file.childImageSharp.fixed
}

export default useProfilePhoto
