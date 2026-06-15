import { Feature } from "@/types/feature";
import {
  AntennaIcon,
  ChartIcon,
  GlobeIcon,
  NetworkIcon,
  RouteIcon,
  ShieldIcon,
} from "@/components/ui/icons";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <RouteIcon size={28} className="ds-draw" />,
    title: "E2E Turnkey Delivery",
    paragraph:
      "From product sourcing to deployment, NOC operations, and project management, we manage the entire technology lifecycle ensuring seamless execution with one partner and one point of accountability.",
  },
  {
    id: 2,
    icon: <NetworkIcon size={28} className="ds-draw" />,
    title: "Vast Partner Ecosystem",
    paragraph:
      "Strategic partnerships with global leaders like Cisco, HPE, Palo Alto, Oracle, and Juniper enable us to deliver carrier-grade solutions that are proven, scalable, and trusted worldwide.",
  },
  {
    id: 3,
    icon: <ChartIcon size={28} className="ds-draw" />,
    title: "Cost-Effective Excellence",
    paragraph:
      "Our technology aggregator model delivers carrier-grade infrastructure at highly competitive costs, helping organizations deploy advanced solutions without unnecessary overhead.",
  },
  {
    id: 4,
    icon: <GlobeIcon size={28} className="ds-draw" />,
    title: "Regional Expertise",
    paragraph:
      "With strong experience across India and the SAARC region, we understand the operational realities, regulatory frameworks, and infrastructure demands of regional telecom and enterprise markets.",
  },
  {
    id: 5,
    icon: <AntennaIcon size={28} className="ds-draw" />,
    title: "Next-Gen Technology Ready",
    paragraph:
      "From 5G and vRAN to SD-WAN, IoT, and AI-driven network automation, we help organizations adopt future-ready technologies that power the next generation of connectivity.",
  },
  {
    id: 6,
    icon: <ShieldIcon size={28} className="ds-draw" />,
    title: "Customer-First Culture",
    paragraph:
      "We build long-term partnerships through reliability, transparency, and measurable outcomes, focusing on delivering real value to every client we work with.",
  },
];

export default featuresData;
