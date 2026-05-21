// Icon component name exports for dynamic loading
export const IconComponents = {
  IconCalender: "IconCalender",
  IconJet: "IconJet",
  IconScan: "IconScan",
  IconJustice: "IconJustice",
  IconComputer: "IconComputer",
  IconWifi: "IconWifi",
  IconBook: "IconBook",
  IconAccess: "IconAccess",
  IconRecord: "IconRecord",
  IconShield: "IconShield",
  IconUser: "IconUser",
  IconBell: "IconBell",
  IconSquareOurSolution: "IconSquareOurSolution",
  IconAboutUs: "IconAboutUs",
  IconHelpDesk: "IconHelpDesk",
  IconSquareOurSolutionActive: "IconSquareOurSolutionActive",
  IconAboutUsActive: "IconAboutUsActive",
  IconHelpDeskActive: "IconHelpDeskActive",
  IconPricing: "IconPricing",
  IconPricingActive: "IconPricingActive",
  IconContactUs: "IconContactUs",
  IconContactUsActive: "IconContactUsActive",
} as const;

export const menuItems = [
  {
    label: "Our Solutions",
    withMenu: true,
    delay: "200",
    icon: IconComponents.IconSquareOurSolution,
    items: [
      { name: "NeoEHR", path: "/our-solutions/neo-ehr" },
      { name: "NeoInsure", path: "/our-solutions/neo-insure" },
      { name: "myNeo Health", path: "/our-solutions/my-neo" },
    ],
  },
  {
    href: "/about-us",
    label: "About Us",
    delay: "300",
    withMenu: false,
    icon: IconComponents.IconAboutUs,
  },
  {
    label: "Help Desk",
    delay: "500",
    withMenu: true,
    icon: IconComponents.IconHelpDesk,
    items: [
      {
        name: "User guides",
        path: "/help-desk/user-guides",
        subItems: [
          { name: "NeoEHR", path: "neoehr.guide.plural.health" },
          // {name: "NeoInsure", path: "⁠neoinsure.guide.plural.health"},
          // {name: "MyNeo", path: "myneo.guide.plural.health"},
        ],
      },
      // {name: "Articles", path: "/blog"},
      { name: "Terms of use", path: "/help-desk/terms-of-use" },
      {
        name: "Privacy policy",
        path: "https://myneo.privacy-policy.plural.health/",
      },
      { name: "FAQs", path: "/help-desk/faqs" },
    ],
  },
  {
    href: "/pricing",
    label: "Pricing",
    delay: "600",
    withMenu: false,
    icon: IconComponents.IconPricing,
  },
  {
    href: "/contact-us",
    label: "Contact Us",
    delay: "600",
    withMenu: false,
    icon: IconComponents.IconContactUs,
  },
];

export const getMenuItemsWithActiveIcons = (activePath: string) => {
  return [
    {
      label: "Our Solutions",
      withMenu: true,
      delay: "200",
      icon: [
        "/our-solutions/neo-ehr",
        "/our-solutions/neo-insure",
        "/our-solutions/my-neo",
      ].includes(activePath)
        ? IconComponents.IconSquareOurSolutionActive
        : IconComponents.IconSquareOurSolution,
      items: [
        { name: "NeoEHR", path: "/our-solutions/neo-ehr" },
        { name: "NeoInsure", path: "/our-solutions/neo-insure" },
        { name: "myNeo Health", path: "/our-solutions/my-neo" },
      ],
    },
    {
      href: "/about-us",
      label: "About Us",
      delay: "300",
      withMenu: false,
      icon:
        activePath === "/about-us"
          ? IconComponents.IconAboutUsActive
          : IconComponents.IconAboutUs,
    },
    {
      label: "Help Desk",
      delay: "500",
      withMenu: true,
      icon: [
        "/help-desk/user-guides",
        "/help-desk/terms-of-use",
        "/help-desk/privacy-policy",
        "/help-desk/faqs",
      ].includes(activePath)
        ? IconComponents.IconHelpDeskActive
        : IconComponents.IconHelpDesk,
      items: [
        {
          name: "User guides",
          path: "/help-desk/user-guides",
          subItems: [
            { name: "NeoEHR", path: "neoehr.guide.plural.health" },
            // Add more subItems as needed
          ],
        },
        { name: "Terms of use", path: "/help-desk/terms-of-use" },
        {
          name: "Privacy policy",
          path: "https://myneo.privacy-policy.plural.health/",
        },
        { name: "FAQs", path: "/help-desk/faqs" },
      ],
    },
    {
      href: "/pricing",
      label: "Pricing",
      delay: "600",
      withMenu: false,
      icon:
        activePath === "/pricing"
          ? IconComponents.IconPricingActive
          : IconComponents.IconPricing,
    },
    {
      href: "/contact-us",
      label: "Contact Us",
      delay: "600",
      withMenu: false,
      icon:
        activePath === "/contact-us"
          ? IconComponents.IconContactUsActive
          : IconComponents.IconContactUs,
    },
  ];
};

export default getMenuItemsWithActiveIcons;
