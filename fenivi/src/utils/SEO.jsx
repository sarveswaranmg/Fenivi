import { Helmet } from "react-helmet-async";

/**
 * SEO Component for managing page-specific meta tags
 * Usage: <SEO title="Page Title" description="Page description" />
 */
export const SEO = ({
  title = "Fenivi Research - Innovation in Research & Technology",
  description = "Fenivi Research offers cutting-edge research, consulting, and technology solutions. Explore our expertise in innovation, courses, projects, and knowledge resources.",
  keywords = "research, technology, innovation, consulting, courses, projects, knowledge hub, expertise",
  image = "https://fenivi.com/favicon.png",
  url = "https://fenivi.com",
  author = "Fenivi Research",
  type = "website",
  noindex = false,
}) => {
  return (
    <Helmet>
      {/* Basic Title and Meta */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Robots Meta Tag */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Fenivi Research" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="language" content="English" />
      <link rel="alternate" hreflang="en" href={url} />
    </Helmet>
  );
};

export default SEO;
