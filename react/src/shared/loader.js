import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
      height={160}
      width={360}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <circle cx="60" cy="20" r="8" /> 
      <rect x="75" y="15" rx="5" ry="5" width="220" height="10" /> 
      <circle cx="60" cy="50" r="8" /> 
      <rect x="75" y="45" rx="5" ry="5" width="220" height="10" /> 
      <circle cx="60" cy="80" r="8" /> 
      <rect x="75" y="75" rx="5" ry="5" width="220" height="10" /> 
      <circle cx="60" cy="110" r="8" /> 
      <rect x="75" y="105" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
);

export default Loader;
