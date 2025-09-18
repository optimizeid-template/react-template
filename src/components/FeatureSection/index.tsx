import React from 'react';
import SectionBox from '../SectionBox';

interface FeatureSectionProps {
  image?: string;
  backgroundGradient?: number;
  features?: Array<{
    title: string;
    description: string;
  }>;
  reverse?: boolean;
}

interface FeatureProps {
  title: string;
  description: string;
}

function FeatureSection({
  image = '',
  backgroundGradient,
  features = [],
  reverse = false,
}: FeatureSectionProps) {
  return (
    <SectionBox backgroundGradient={backgroundGradient}>
      <div className={`flex items-center md:block ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className="flex-1 flex items-center w-full">
          <div className={`w-full ${reverse ? 'pl-6 pr-0' : 'pr-6 pl-0'} md:p-0`}>
            <div 
              className="w-full pb-[60%] rounded bg-contain bg-center bg-no-repeat md:mb-6"
              style={{ backgroundImage: image ? `url(${image})` : undefined }}
            />
          </div>
        </div>
        <div className="flex-1 flex items-center w-full">
          <div className="grid gap-6 grid-cols-2 xl:block">
            {features.map((feature) => (
              <div key={feature.title} className="text-base leading-[22px] text-[#737b7d] xl:not-last:mb-6">
                <label className="block font-bold text-lg leading-[25px] text-[#737b7d] mb-4">
                  {feature.title}
                </label>
                <div>{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionBox>
  );
}

export default FeatureSection;