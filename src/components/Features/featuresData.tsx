import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        className="fill-current"
      >
        <path d="M3 12h18M12 3v18" strokeWidth="2" stroke="currentColor" />
      </svg>
    ),
    title: "E2E Turnkey Delivery",
    paragraph:
      "From product sourcing to deployment, NOC operations, and project management, we manage the entire technology lifecycle ensuring seamless execution with one partner and one point of accountability.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        className="fill-current"
      >
        <circle cx="12" cy="12" r="9" strokeWidth="2" stroke="currentColor" />
        <path d="M3 12h18" strokeWidth="2" stroke="currentColor" />
      </svg>
    ),
    title: "Vast Partner Ecosystem",
    paragraph:
      "Strategic partnerships with global leaders in Networking, 5G, Cloud, and Security enable us to deliver carrier-grade solutions that are proven, scalable, and trusted worldwide.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        className="fill-current"
      >
        <path
          d="M12 3L3 8l9 5 9-5-9-5z"
          strokeWidth="2"
          stroke="currentColor"
        />
        <path
          d="M3 16l9 5 9-5"
          strokeWidth="2"
          stroke="currentColor"
        />
      </svg>
    ),
    title: "Cost-Effective Excellence",
    paragraph:
      "Our technology aggregator model delivers carrier-grade infrastructure at highly competitive costs, helping organisations deploy advanced solutions without unnecessary overhead.",
  },
  {
    id: 4,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        className="fill-current"
      >
        <path
          d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z"
          strokeWidth="2"
          stroke="currentColor"
        />
      </svg>
    ),
    title: "Regional Expertise",
    paragraph:
      "With strong experience across India and the SAARC region, we understand the operational realities, regulatory frameworks, and infrastructure demands of regional telecom and enterprise markets.",
  },
  {
    id: 5,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        className="fill-current"
      >
        <path
          d="M12 2v20M2 12h20"
          strokeWidth="2"
          stroke="currentColor"
        />
      </svg>
    ),
    title: "Next-Gen Technology Ready",
    paragraph:
      "From 5G and vRAN to SD-WAN, IoT, and AI-driven network automation, we help organisations adopt future-ready technologies that power the next generation of connectivity.",
  },
  {
    id: 6,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        className="fill-current"
      >
        <path
          d="M17 20h5V4H2v16h5"
          strokeWidth="2"
          stroke="currentColor"
        />
        <circle cx="12" cy="10" r="3" strokeWidth="2" stroke="currentColor" />
      </svg>
    ),
    title: "Customer-First Culture",
    paragraph:
      "We build long-term partnerships through reliability, transparency, and measurable outcomes, focusing on delivering real value to every client we work with.",
  },
];

export default featuresData;