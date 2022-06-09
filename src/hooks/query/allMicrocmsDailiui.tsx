import React from 'react';
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
  // console.log(data);
  return data.allMicrocmsDailyui;
};
