import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {/* You can also add OpenGraph/Twitter meta tags here if you want */}
    </Helmet>
  );
};

export default SEO;
