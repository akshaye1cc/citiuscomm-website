export type Client = {
  id: number;
  title: string;
  logo: string;
  url: string;
};

const clients: Client[] = [
  { id: 1,  title: "Airtel",        logo: "/images/Clients/airtel.webp",              url: "#" },
  { id: 2,  title: "Discovery",     logo: "/images/Clients/Discovery-Logo.webp",      url: "#" },
  { id: 3,  title: "Fastway",       logo: "/images/Clients/Fastway-Logo.webp",        url: "#" },
  { id: 4,  title: "Hathway",       logo: "/images/Clients/Hathway-Logo.webp",        url: "#" },
  { id: 5,  title: "Megh Bela",     logo: "/images/Clients/Megh-Bela-Logo.webp",      url: "#" },
  { id: 6,  title: "Metrocast",     logo: "/images/Clients/Metrocast-Logo.webp",      url: "#" },
  { id: 7,  title: "Nepal Telecom", logo: "/images/Clients/Nepal-Telecom-Logo-1.webp", url: "#" },
  { id: 8,  title: "Rakuten",       logo: "/images/Clients/Rakuten-Logo.webp",        url: "#" },
];

export default clients;
