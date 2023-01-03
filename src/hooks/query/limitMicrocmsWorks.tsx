import { useStaticQuery, graphql } from 'gatsby';

export const uselimitMicrocmsWokrsMetadata = () => {
  const limitdata = useStaticQuery(graphql`
    {
      allMicrocmsWorks(limit: 4) {
        nodes {
          githubUrl
          productDatail
          productImage {
            height
            url
            width
          }
          productTitle
          productUrl
          productComposition
          productData
          sortIndex
        }
      }
    }
  `);
  return limitdata.allMicrocmsWorks;
};
