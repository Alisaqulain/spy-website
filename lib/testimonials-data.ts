export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  /** Optional: YouTube embed URL (e.g. https://www.youtube.com/embed/VIDEO_ID) or Instagram reel URL */
  videoUrl?: string;
  videoTitle?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO",
    company: "TechCorp Industries",
    content:
      "SPRY has been our trusted partner for over five years. Their expertise in corporate insurance has helped us manage risks effectively and save significantly on premiums. Highly professional team.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "HR Director",
    company: "Global Services Ltd",
    content:
      "The employee benefits programme designed by SPRY has been exceptional. Our employees are happy, and the claims process is seamless. We recommend them to every business we know.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Business Owner",
    company: "Patel Enterprises",
    content:
      "As a small business owner, finding the right insurance was overwhelming. SPRY made it simple and affordable. Their team is professional, responsive, and always available when we need them.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Finance Manager",
    company: "Manufacturing Co.",
    content:
      "Their risk assessment and advisory services are top-notch. We have avoided potential losses thanks to their proactive approach. SPRY truly understands our business and industry needs.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "COO",
    company: "Infrastructure Solutions",
    content:
      "From placement to claims, SPRY delivers end-to-end. Their lenders insurance advisory helped us meet our financiers' requirements smoothly. A reliable partner for any corporate.",
    rating: 5,
  },
];
