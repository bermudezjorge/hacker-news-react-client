import React from "react";
import ContentLoader from "react-content-loader";

export default function Loader(props) {
  return (
    <ContentLoader
      speed={0}
      width={490}
      height={90}
      viewBox="0 0 490 90"
      backgroundColor="#f2f2f2"
      foregroundColor="#ffffff"
      {...props}
    >
      <rect x="18" y="8" rx="4" ry="4" width="145" height="14" />
      <rect x="17" y="33" rx="4" ry="4" width="360" height="30" />
      <rect x="403" y="17" rx="4" ry="4" width="48" height="47" />
    </ContentLoader>
  );
}
