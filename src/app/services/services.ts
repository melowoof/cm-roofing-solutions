export type ServiceType = {
  url: string;
  imgSrc: string;
  title: string;
  id: string;
};

export const services: ServiceType[] = [
  {
    url: "/asphalt-shingles",
    imgSrc: "/images/services/asphalt-shingles.jpg",
    title: "Asphalt Shingles",
    id: "asphalt-shingles",
  },
  {
    url: "/metal-roofs",
    imgSrc: "/images/services/metal-roofs2-upscaled.png",
    title: "Metal Roofs",
    id: "metal-roofs",
  },
  {
    url: "/flat-roofs",
    imgSrc: "/images/services/flat-roofs.jpg",
    title: "Flat Roofs",
    id: "flat-roofs",
  },
  {
    url: "/synthetic-roofs",
    imgSrc: "/images/services/synthetic-roofs.jpg",
    title: "Synthetic Roofs",
    id: "synthetic-roofs",
  },
  {
    url: "/standing-seam",
    imgSrc: "/images/services/standing-seam.webp",
    title: "Standing Seam",
    id: "standing-seam",
  },
  {
    url: "/roof-repair",
    imgSrc: "/images/services/roof-repair.jpg",
    title: "Roof Repair",
    id: "roof-repair",
  },
];
