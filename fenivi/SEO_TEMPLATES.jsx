// ===================================================================
// SEO COMPONENT TEMPLATE EXAMPLES
// Copy and paste these examples to add SEO to each page
// ===================================================================

// ===================================================================
// STATIC PAGES (Pages with fixed content)
// ===================================================================

// 1. ABOUT PAGE - About.jsx
import SEO from '../utils/SEO';

export default function About() {
  return (
    <>
      <SEO 
        title="About Fenivi Research - Our Mission & Expertise"
        description="Learn about Fenivi Research, our mission to advance innovation, our team of expert researchers and consultants, and our commitment to excellence."
        keywords="about us, research team, innovation, expertise, consulting, mission, vision"
        url="https://fenivi.com/about"
      />
      {/* Rest of about page content */}
    </>
  );
}

// ===================================================================

// 2. SERVICES PAGE - Services.jsx
import SEO from '../utils/SEO';

export default function Services() {
  return (
    <>
      <SEO 
        title="Research & Consulting Services - Fenivi Research"
        description="Professional research and consulting services for businesses. From market analysis to technology solutions, we provide comprehensive expertise."
        keywords="consulting services, research services, business consulting, technology solutions, market analysis, expert advisory"
        url="https://fenivi.com/services"
      />
      {/* Rest of services page content */}
    </>
  );
}

// ===================================================================

// 3. PROJECTS PAGE - Projects.jsx
import SEO from '../utils/SEO';

export default function Projects() {
  return (
    <>
      <SEO 
        title="Featured Projects - Fenivi Research Portfolio"
        description="Explore our portfolio of innovative projects showcasing expertise in research, development, and technology implementation."
        keywords="projects, portfolio, case studies, innovation, technology, research projects"
        url="https://fenivi.com/projects"
      />
      {/* Rest of projects page content */}
    </>
  );
}

// ===================================================================

// 4. COURSES PAGE - Courses.jsx
import SEO from '../utils/SEO';

export default function Courses() {
  return (
    <>
      <SEO 
        title="Online Courses - Learn from Experts | Fenivi Research"
        description="Explore comprehensive online courses on research, innovation, and technology. Advance your career with expert instruction and industry insights."
        keywords="online courses, research training, technology courses, professional development, e-learning, certifications"
        url="https://fenivi.com/courses"
      />
      {/* Rest of courses page content */}
    </>
  );
}

// ===================================================================

// 5. EVENTS PAGE - Event.jsx
import SEO from '../utils/SEO';

export default function Events() {
  return (
    <>
      <SEO 
        title="Upcoming Events - Fenivi Research Conferences & Workshops"
        description="Join our upcoming webinars, workshops, and conferences on research, innovation, and technology trends."
        keywords="events, conferences, webinars, workshops, seminars, professional development"
        url="https://fenivi.com/events"
      />
      {/* Rest of events page content */}
    </>
  );
}

// ===================================================================

// 6. KNOWLEDGE HUB PAGE - KnowledgeHub.jsx
import SEO from '../utils/SEO';

export default function KnowledgeHub() {
  return (
    <>
      <SEO 
        title="Knowledge Hub - Articles & Resources | Fenivi Research"
        description="Access our comprehensive knowledge hub with research articles, insights, and resources on innovation and technology."
        keywords="articles, resources, knowledge base, insights, research, technology trends, best practices"
        url="https://fenivi.com/knowledge-hub"
      />
      {/* Rest of knowledge hub content */}
    </>
  );
}

// ===================================================================

// 7. CONTACT PAGE - Contact.jsx
import SEO from '../utils/SEO';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Fenivi Research - Get In Touch"
        description="Have a question? Contact our team at Fenivi Research. We're happy to discuss your research and consulting needs."
        keywords="contact us, get in touch, inquiry, support, help"
        url="https://fenivi.com/contact"
      />
      {/* Rest of contact page content */}
    </>
  );
}

// ===================================================================

// 8. LEGAL PAGES - Terms.jsx, PrivacyPolicy.jsx, RefundPolicy.jsx
import SEO from '../utils/SEO';

export default function Terms() {
  return (
    <>
      <SEO 
        title="Terms of Service - Fenivi Research"
        description="Read our terms of service and conditions for using Fenivi Research platforms and services."
        keywords="terms, terms of service, legal, agreements"
        url="https://fenivi.com/terms"
      />
      {/* Terms content */}
    </>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy - Fenivi Research"
        description="Learn how Fenivi Research collects, uses, and protects your personal information."
        keywords="privacy, privacy policy, data protection, security"
        url="https://fenivi.com/privacy-policy"
      />
      {/* Privacy policy content */}
    </>
  );
}

export default function RefundPolicy() {
  return (
    <>
      <SEO 
        title="Refund Policy - Fenivi Research"
        description="Understand our refund policy for courses, services, and products purchased from Fenivi Research."
        keywords="refund, refund policy, returns, money back guarantee"
        url="https://fenivi.com/refund-policy"
      />
      {/* Refund policy content */}
    </>
  );
}

// ===================================================================
// DYNAMIC PAGES (Pages with content from database)
// ===================================================================

// 9. ARTICLE/BLOG DETAIL PAGE - Article.jsx
import SEO from '../utils/SEO';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch article from Firebase or API
    // setArticle(fetchedArticle);
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <>
      <SEO 
        title={`${article.title} | Fenivi Research Blog`}
        description={article.summary || article.description?.substring(0, 160)}
        keywords={article.tags?.join(', ') || 'research, article'}
        url={`https://fenivi.com/article/${article.id}`}
        image={article.featuredImage || 'https://fenivi.com/favicon.png'}
        author={article.author || 'Fenivi Research'}
        type="article"
      />
      {/* Article content */}
    </>
  );
}

// ===================================================================

// 10. COURSE DETAILS PAGE - CourseDetails.jsx
import SEO from '../utils/SEO';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course from Firebase or API
    // setCourse(fetchedCourse);
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <>
      <SEO 
        title={`${course.title} - Online Course | Fenivi Research`}
        description={`Learn ${course.title} with expert instructors. Duration: ${course.duration}. ${course.description?.substring(0, 100)}`}
        keywords={`${course.title}, ${course.category}, online learning, course, training`}
        url={`https://fenivi.com/courses/${course.id}`}
        image={course.thumbnail || 'https://fenivi.com/favicon.png'}
        type="course"
      />
      {/* Course details content */}
    </>
  );
}

// ===================================================================

// 11. PROJECT DETAILS PAGE - ProjectDetails.jsx
import SEO from '../utils/SEO';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch project from Firebase or API
    // setProject(fetchedProject);
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <>
      <SEO 
        title={`${project.title} - Portfolio Project | Fenivi Research`}
        description={`${project.description?.substring(0, 160)}. A case study of innovative research and development.`}
        keywords={`${project.title}, project, case study, ${project.category}, innovation`}
        url={`https://fenivi.com/projects/${project.id}`}
        image={project.featuredImage || 'https://fenivi.com/favicon.png'}
        type="project"
      />
      {/* Project details content */}
    </>
  );
}

// ===================================================================

// 12. EVENT DETAILS PAGE - EventDetails.jsx
import SEO from '../utils/SEO';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event from Firebase or API
    // setEvent(fetchedEvent);
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <>
      <SEO 
        title={`${event.title} - Event | Fenivi Research`}
        description={`Join us for ${event.title}. ${event.description?.substring(0, 120)}. Date: ${event.date}`}
        keywords={`${event.title}, event, webinar, workshop, ${event.category}`}
        url={`https://fenivi.com/events/${event.id}`}
        image={event.image || 'https://fenivi.com/favicon.png'}
        type="event"
      />
      {/* Event details content */}
    </>
  );
}

// ===================================================================
// ADMIN PAGES (Should NOT be indexed - use noindex)
// ===================================================================

// 13. ADMIN LOGIN PAGE - AdminLogin.jsx
import SEO from '../utils/SEO';

export default function AdminLogin() {
  return (
    <>
      <SEO 
        title="Admin Login - Fenivi Research"
        description="Admin panel for Fenivi Research content management"
        url="https://fenivi.com/admin"
        noindex={true}  // ← Block from search engines
      />
      {/* Login form content */}
    </>
  );
}

// ===================================================================

// 14. ADMIN DASHBOARD - AdminDashboard.jsx
import SEO from '../utils/SEO';

export default function AdminDashboard() {
  return (
    <>
      <SEO 
        title="Admin Dashboard - Fenivi Research"
        description="Content management dashboard"
        url="https://fenivi.com/dashboard"
        noindex={true}  // ← Block from search engines
      />
      {/* Dashboard content */}
    </>
  );
}

// ===================================================================

// 15. EDIT PAGES - EditArticle.jsx, EditProject.jsx, etc.
import SEO from '../utils/SEO';

export default function EditArticle() {
  return (
    <>
      <SEO 
        title="Edit Article - Admin"
        url="https://fenivi.com/admin/edit-article"
        noindex={true}  // ← Block from search engines
      />
      {/* Edit form content */}
    </>
  );
}

// ===================================================================
// BEST PRACTICES CHECKLIST
// ===================================================================
/*

✅ GUIDELINES FOR GOOD SEO:

1. TITLES (50-60 characters):
   - Keep concise and descriptive
   - Include main keyword
   - Include brand name for homepage
   - Format: "Page Title | Fenivi Research"

2. DESCRIPTIONS (150-160 characters):
   - Should be compelling and click-worthy
   - Include relevant keywords naturally
   - Include call-to-action or benefit
   - Unique for each page

3. KEYWORDS:
   - 3-5 relevant keywords per page
   - Separated by commas
   - Include long-tail keywords
   - Match page content

4. URLs:
   - Use full HTTPS URL
   - Keep consistent with routing
   - Use www or non-www consistently
   - Use proper domain

5. IMAGES:
   - Always include if possible
   - Use proper image URLs
   - Ensure images are relevant
   - Use descriptive filenames

6. CONTENT:
   - Write unique content for each page
   - Use keywords naturally
   - Include internal links
   - Keep content fresh

7. ADMIN/PRIVATE PAGES:
   - Always use noindex={true}
   - Don't expose internal pages
   - Keep login pages private
   - Prevent indexing of draft content

*/

// ===================================================================
