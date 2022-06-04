// src/pages/index.js
import { graphql } from 'gatsby';

export const QueryAllMicrocmsBlog = graphql`
  query {
    allMicrocmsBlog {
      edges {
        node {
          blogId
          title
        }
      }
    }
  }
`;
