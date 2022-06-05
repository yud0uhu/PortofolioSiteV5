import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const microcmsDailyui = () => {
  const data = useStaticQuery(graphql`
    {
      microcmsDailyui {
        figma
      }
    }
  `);
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default microcmsDailyui;
