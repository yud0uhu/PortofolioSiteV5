import { useStaticQuery, graphql } from 'gatsby';

export const useAllMicrocmsDailiuiMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      allMicrocmsDailyui {
        nodes {
          figma
          dailyuiId
          title
          image {
            height
            url
            width
          }
        }
      }
    }
  `);
  return data.allMicrocmsDailyui;
};
