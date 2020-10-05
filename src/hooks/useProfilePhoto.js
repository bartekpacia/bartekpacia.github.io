import { graphql, useStaticQuery } from "gatsby"

const useProfilePhoto = () => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 256, height: 256) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return query.file.childImageSharp.fixed
}

export default useProfilePhoto
