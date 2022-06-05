import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const AllMicrocmsWorks = () => {
  const data = useStaticQuery(graphql`
    {
      allMicrocmsWorks {
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
        }
      }
    }
  `);
  console.log(data.allMicrocmsWorks);
  return <pre>{JSON.stringify(data.allMicrocmsWorks, null, 4)}</pre>;
};

export default AllMicrocmsWorks;
