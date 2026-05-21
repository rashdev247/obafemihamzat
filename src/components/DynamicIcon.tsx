import dynamic from 'next/dynamic';
import React from 'react';

// Map of icon names to dynamic imports
const iconMap: Record<string, React.ComponentType<Record<string, unknown>>> = {
  IconCalender: dynamic(() => import('./IconComponents/IconCalender')),
  IconJet: dynamic(() => import('./IconComponents/IconJet')),
  IconScan: dynamic(() => import('./IconComponents/IconScan')),
  IconJustice: dynamic(() => import('./IconComponents/IconJustice')),
  IconComputer: dynamic(() => import('./IconComponents/IconComputer')),
  IconWifi: dynamic(() => import('./IconComponents/IconWifi')),
  IconBook: dynamic(() => import('./IconComponents/IconBook')),
  IconAccess: dynamic(() => import('./IconComponents/IconAccess')),
  IconRecord: dynamic(() => import('./IconComponents/IconRecord')),
  IconShield: dynamic(() => import('./IconComponents/IconShield')),
  IconUser: dynamic(() => import('./IconComponents/IconUser')),
  IconBell: dynamic(() => import('./IconComponents/IconBell')),
  IconHeart: dynamic(() => import('./IconComponents/IconHeart')),
  IconSquareOurSolution: dynamic(() => import('./IconComponents/IconSquareOurSolution')),
  IconAboutUs: dynamic(() => import('./IconComponents/IconAboutUs')),
  IconHelpDesk: dynamic(() => import('./IconComponents/IconHelpDesk')),
  IconSquareOurSolutionActive: dynamic(() => import('./IconComponents/IconSquareOurSolutionActive')),
  IconAboutUsActive: dynamic(() => import('./IconComponents/IconAboutUsActive')),
  IconHelpDeskActive: dynamic(() => import('./IconComponents/IconHelpDeskActive')),
  IconPricing: dynamic(() => import('./IconComponents/IconPricing')),
  IconPricingActive: dynamic(() => import('./IconComponents/IconPricingActive')),
  IconBlog: dynamic(() => import('./IconComponents/IconBlog')),
  IconBlogActive: dynamic(() => import('./IconComponents/IconBlogActive')),
  IconContactUs: dynamic(() => import('./IconComponents/IconContactUs')),
  IconContactUsActive: dynamic(() => import('./IconComponents/IconContactUsActive')),
  IconCuracel: dynamic(() => import('./IconComponents/IconCuracel')),
  IconSterlingBank: dynamic(() => import('./IconComponents/IconSterlingBank')),
  IconNCDC: dynamic(() => import('./IconComponents/IconNCDC')),
  IconXamba: dynamic(() => import('./IconComponents/IconXamba')),
  IconGradientCircleOne: dynamic(() => import('./IconComponents/IconGradientCircleOne')),
  IconStar: dynamic(() => import('./IconComponents/IconStar')),
};

interface DynamicIconProps extends Record<string, unknown> {
  name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }
  
  return <IconComponent {...props} />;
};

export default DynamicIcon;
