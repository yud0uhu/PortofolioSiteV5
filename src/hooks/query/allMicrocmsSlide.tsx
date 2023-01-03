import { useStaticQuery, graphql } from 'gatsby';

export const useAllMicrocmsSlideMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      allMicrocmsSlide {
        nodes {
          slideTitle
          slideUrl
        }
      }
    }
  `);
  return data.allMicrocmsSlide;
};
