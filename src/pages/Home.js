import React from 'react';
import AcademyList from '../components/AcademyList';
import DataPlaceholder from '../components/DataPlaceholder';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import HomeCover from '../components/HomeCover/HomeCover';
import LogoPlaceholder from '../components/LogoPlaceholder';
import SimpleList from '../components/SimpleList';
import features from '../constant/features';

function Home() {
  const { sections } = window.templateConfig;

  return (
    <>
      <HomeCover />

      {sections.map((section, index) => {
        const { sectionType } = section;

        if (sectionType === 'feature-left') {
          const { features, image, background } = section;
          return (
            <FeatureSection
              key={index}
              image={image}
              features={features}
              backgroundGradient={parseInt(background, 10)}
            />
          );
        }

        if (sectionType === 'feature-right') {
          const { features, image, background } = section;
          return (
            <FeatureSection
              key={index}
              image={image}
              features={features}
              backgroundGradient={parseInt(background, 10)}
              reverse
            />
          );
        }

        return null;
      })}

      <SimpleList>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
      </SimpleList>

      <SimpleList backgroundGradient={3}>
        <DataPlaceholder />
        <DataPlaceholder />
        <DataPlaceholder />
        <DataPlaceholder />
      </SimpleList>

      <AcademyList />
    </>
  );
}

export default Home;
