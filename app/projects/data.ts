export type Project = {
  slug: string;
  number: string;
  platform: string;
  title: string;
  summary: string;
  accent: "coral" | "lime" | "lavender" | "aubergine";
  tags: string[];
  overview: string;
  issues: { title: string; impact: string; fix: string; wcag: string }[];
  tests: string[];
  demoDescription: string;
  clientName: string;
  role: string;
  duration: string;
  liveUrl: string;
  screenshots: { label: string; src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "shopify-accessibility",
    number: "01",
    platform: "SHOPIFY STOREFRONT",
    title: "A storefront everyone can shop",
    summary: "An inclusive commerce concept focused on product discovery, variant selection, cart feedback and a clearer checkout journey.",
    accent: "coral",
    tags: ["WCAG 2.2 AA", "E-commerce", "Keyboard", "Screen readers"],
    overview: "This concept explores an accessible Shopify-style shopping journey. It demonstrates how product information, purchase controls, cart updates and form feedback can be structured so shoppers can understand and operate the experience using different input methods.",
    issues: [
      { title: "Unclear product image alternatives", impact: "Assistive technology users may miss useful product details or hear repetitive filenames.", fix: "Write concise, contextual alternative text; use empty alt text for decorative imagery and avoid repeating adjacent product titles.", wcag: "1.1.1 Non-text Content" },
      { title: "Variant controls without clear names", impact: "A shopper may not know which size or finish is selected.", fix: "Use a fieldset and legend, label each option, expose the selected state and keep keyboard operation predictable.", wcag: "1.3.1 Info and Relationships · 4.1.2 Name, Role, Value" },
      { title: "Cart updates are visually-only", impact: "A screen-reader user may not know that an item was added or the cart count changed.", fix: "Announce concise cart feedback through a polite status region without moving focus unexpectedly.", wcag: "4.1.3 Status Messages" },
      { title: "Low-clarity form errors", impact: "People may not know which checkout field needs attention or how to fix it.", fix: "Associate instructions and errors with fields, identify errors in text and provide an error summary when appropriate.", wcag: "3.3.1 Error Identification · 3.3.2 Labels or Instructions" }
    ],
    tests: ["Complete product selection and add-to-cart using keyboard only.", "Check accessible names, roles and selected states in the accessibility tree.", "Verify cart feedback is announced without stealing focus.", "Test checkout labels, required instructions and error recovery with a screen reader.", "Run axe or an equivalent automated scan, then manually verify findings."],
    demoDescription: "A compact storefront demo with labeled product options, keyboard-operable controls and an announced cart update.",
    clientName: "Sample Shopify Store (replace with client/project name)",
    role: "Accessibility audit, frontend fixes & responsive UI",
    duration: "Sample timeline · replace with actual duration",
    liveUrl: "https://example.com",
    screenshots: [
      { label: "Desktop website", src: "/images/projects/shopify-desktop.svg", alt: "Dummy desktop screenshot for the Shopify storefront concept" },
      { label: "Mobile website", src: "/images/projects/shopify-mobile.svg", alt: "Dummy mobile screenshot for the Shopify storefront concept" },
      { label: "Product interaction", src: "/images/projects/shopify-detail.svg", alt: "Dummy screenshot showing accessible product options and cart feedback" }
    ],
  },
  {
    slug: "wordpress-accessibility",
    number: "02",
    platform: "WORDPRESS CONTENT SITE",
    title: "Content with a clearer structure",
    summary: "A publishing experience built around meaningful headings, landmark navigation, readable content and accessible forms.",
    accent: "lime",
    tags: ["WordPress", "Semantic HTML", "Content", "Forms"],
    overview: "This WordPress-inspired concept focuses on the accessibility foundations that content teams can influence: page structure, navigation, link purpose, media alternatives and form feedback. The examples are implementation patterns, not an audit of a live WordPress installation.",
    issues: [
      { title: "Heading levels used for visual styling", impact: "The page outline becomes difficult to navigate and understand.", fix: "Use headings in a logical hierarchy and style them with CSS rather than choosing levels for appearance.", wcag: "1.3.1 Info and Relationships" },
      { title: "Repeated or vague link labels", impact: "Links read out of context may not communicate their destination.", fix: "Use descriptive link text and distinguish repeated calls to action with surrounding context or accessible names.", wcag: "2.4.4 Link Purpose (In Context)" },
      { title: "Navigation lacks a clear skip route", impact: "Keyboard users must repeatedly traverse the same navigation before reaching content.", fix: "Provide a visible-on-focus skip link and use labeled navigation landmarks.", wcag: "2.4.1 Bypass Blocks" },
      { title: "Embedded media has no equivalent", impact: "People who cannot hear or see the media can miss essential information.", fix: "Provide synchronized captions for prerecorded video with audio and a transcript where useful; describe meaningful visual information.", wcag: "1.2.2 Captions (Prerecorded) · 1.2.3 Audio Description or Media Alternative" }
    ],
    tests: ["Navigate by landmarks and headings with a screen reader.", "Use the skip link and verify focus moves to the main content.", "Review link purpose in context and in a links list.", "Check captions, transcripts and meaningful image alternatives.", "Submit forms with missing and invalid values using keyboard only."],
    demoDescription: "A content-led article page with skip navigation, semantic landmarks, a heading outline and a labeled newsletter form.",
    clientName: "Sample WordPress Website (replace with client/project name)",
    role: "Content structure, semantic HTML & accessibility remediation",
    duration: "Sample timeline · replace with actual duration",
    liveUrl: "https://example.com",
    screenshots: [
      { label: "Desktop website", src: "/images/projects/wordpress-desktop.svg", alt: "Dummy desktop screenshot for the WordPress content website" },
      { label: "Mobile website", src: "/images/projects/wordpress-mobile.svg", alt: "Dummy mobile screenshot for the WordPress content website" },
      { label: "Accessible content form", src: "/images/projects/wordpress-detail.svg", alt: "Dummy screenshot showing a structured article and labeled form" }
    ],
  },
  {
    slug: "react-nextjs-accessibility",
    number: "03",
    platform: "REACT / NEXT.JS APPLICATION",
    title: "Interfaces that work beyond the pointer",
    summary: "A responsive application concept demonstrating focus management, accessible dialogs, status messages and robust component semantics.",
    accent: "lavender",
    tags: ["React 19", "Next.js 15", "ARIA", "Keyboard"],
    overview: "This application concept demonstrates accessible interaction patterns that can be reused in React and Next.js interfaces. It emphasizes native HTML first, deliberate focus behavior and status communication for dynamic updates.",
    issues: [
      { title: "Clickable non-semantic containers", impact: "A pointer-only interaction may be unavailable or confusing to keyboard and assistive technology users.", fix: "Prefer native buttons and links. Add custom keyboard behavior only when a custom widget pattern is genuinely required.", wcag: "2.1.1 Keyboard · 4.1.2 Name, Role, Value" },
      { title: "Focus is lost after dynamic updates", impact: "Users can lose their place after a panel, route or result list changes.", fix: "Keep focus stable for routine updates; move focus intentionally after context-changing actions and provide a visible focus indicator.", wcag: "2.4.3 Focus Order" },
      { title: "Dialog does not manage focus", impact: "Keyboard users can tab behind an open modal or cannot find a way to close it.", fix: "Use a well-tested dialog implementation with an accessible name, focus placement, focus containment and focus return.", wcag: "2.1.2 No Keyboard Trap · 2.4.3 Focus Order" },
      { title: "Async result has no announcement", impact: "A user may not know that an action completed or that results changed.", fix: "Expose concise success, loading and error messages through appropriate status or alert semantics.", wcag: "4.1.3 Status Messages" }
    ],
    tests: ["Use every interactive control with Tab, Shift+Tab, Enter and Space.", "Verify focus visibility, order and return after dialogs or route changes.", "Inspect accessible names and roles for custom components.", "Check dynamic loading, success and error announcements.", "Test responsive layouts at narrow widths and high zoom."],
    demoDescription: "A small dashboard demo with keyboard-friendly tabs, a labeled search field and an announced result status.",
    clientName: "Sample React / Next.js Product (replace with client/project name)",
    role: "Frontend development, reusable components & accessibility fixes",
    duration: "Sample timeline · replace with actual duration",
    liveUrl: "https://example.com",
    screenshots: [
      { label: "Desktop application", src: "/images/projects/react-desktop.svg", alt: "Dummy desktop screenshot for the React and Next.js application" },
      { label: "Mobile application", src: "/images/projects/react-mobile.svg", alt: "Dummy mobile screenshot for the React and Next.js application" },
      { label: "Accessible component states", src: "/images/projects/react-detail.svg", alt: "Dummy screenshot showing accessible dashboard components" }
    ],
  },
  {
    slug: "elearning-accessibility",
    number: "04",
    platform: "E-LEARNING EXPERIENCE",
    title: "Learning without interaction barriers",
    summary: "A course-player concept with accessible lesson navigation, media alternatives, clear progress and keyboard-operable controls.",
    accent: "aubergine",
    tags: ["eLearning", "Captions", "Media", "Keyboard"],
    overview: "This eLearning concept focuses on the learner journey: navigating lessons, understanding media, operating player controls and receiving progress feedback. Media requirements depend on the content and whether it is prerecorded or live.",
    issues: [
      { title: "Video relies on audio alone", impact: "Learners who are deaf or hard of hearing can miss spoken instruction and meaningful sounds.", fix: "Provide accurate synchronized captions for prerecorded media with audio; include speaker identification and relevant sound cues.", wcag: "1.2.2 Captions (Prerecorded)" },
      { title: "Player controls are pointer-dependent", impact: "Keyboard users may be unable to play, pause, seek or adjust volume.", fix: "Use native or accessible controls with clear labels, keyboard operation and visible focus.", wcag: "2.1.1 Keyboard · 2.4.7 Focus Visible" },
      { title: "Progress communicated by color only", impact: "Learners may not understand which lessons are complete or current.", fix: "Pair color with text or an icon and expose progress using suitable semantics.", wcag: "1.4.1 Use of Color · 1.3.1 Info and Relationships" },
      { title: "Timed activities offer no flexibility", impact: "Some learners may not have enough time to complete an activity.", fix: "Allow users to turn off, adjust or extend time limits unless an applicable exception is met.", wcag: "2.2.1 Timing Adjustable" }
    ],
    tests: ["Operate lesson navigation and player controls without a pointer.", "Review caption accuracy, synchronization and relevant sound cues.", "Confirm transcripts and alternatives are available where needed.", "Check progress and completion states without relying on color.", "Verify timing controls and test the course at mobile viewport sizes."],
    demoDescription: "A course lesson demo with a lesson outline, text-based progress states and accessible media-control examples.",
    clientName: "Sample E-Learning Platform (replace with client/project name)",
    role: "Course-player accessibility, media controls & responsive UI",
    duration: "Sample timeline · replace with actual duration",
    liveUrl: "https://example.com",
    screenshots: [
      { label: "Desktop course player", src: "/images/projects/elearning-desktop.svg", alt: "Dummy desktop screenshot for the e-learning course player" },
      { label: "Mobile course player", src: "/images/projects/elearning-mobile.svg", alt: "Dummy mobile screenshot for the e-learning course player" },
      { label: "Lesson and transcript view", src: "/images/projects/elearning-detail.svg", alt: "Dummy screenshot showing course lesson and transcript content" }
    ],
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
