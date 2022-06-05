import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const allMicrocmsWorks = () => {
  const data = useStaticQuery(graphql`
    {
      allMicrocmsWorks {
        edges {
          node {
            githubUrl
          }
        }
      }
    }
  `);
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default allMicrocmsWorks;
