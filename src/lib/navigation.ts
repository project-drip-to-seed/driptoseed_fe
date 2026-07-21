export type NavigationLink = {
  name: string;
  href: string;
};

export const solutionsLink: NavigationLink = {
  name: "Solutions",
  href: "/solutions",
};

export const solutionLinks: NavigationLink[] = [
  {
    name: "Creator Clipping",
    href: "/solutions/creator-clipping",
  },
  {
    name: "Creator Growth",
    href: "/solutions/creator-growth",
  },
  {
    name: "Creator Seeding",
    href: "/solutions/creator-seeding",
  },
  {
    name: "Distribution Strategy",
    href: "/solutions/distribution-strategy",
  }
];
