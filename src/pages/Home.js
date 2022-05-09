import React from 'react';
import AcademyList from '../components/AcademyList';
import DataPlaceholder from '../components/DataPlaceholder';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import HomeCover from '../components/HomeCover/HomeCover';
import LogoPlaceholder from '../components/LogoPlaceholder';
import SimpleList from '../components/SimpleList';

function Home() {
  const { sections } = window.templateConfig;

  return (
    <>
      {sections.map((section, index) => {
        const { sectionType } = section;

        if (sectionType === 'banner') {
          const { title, caption, image } = section.banner;
          return (
            <div id={`section-${index}`}>
              <HomeCover title={title} caption={caption} image={image} />
            </div>
          );
        }

        if (sectionType === 'feature-left') {
          const { features, image, background } = section.feature;
          return (
            <div id={`section-${index}`}>
              <FeatureSection
                key={index}
                image={image}
                features={features}
                backgroundGradient={parseInt(background, 10)}
              />
            </div>
          );
        }

        if (sectionType === 'feature-right') {
          const { features, image, background } = section.feature;
          return (
            <div id={`section-${index}`}>
              <FeatureSection
                key={index}
                image={image}
                features={features}
                backgroundGradient={parseInt(background, 10)}
                reverse
              />
            </div>
          );
        }

        if (sectionType === 'logo-list') {
          const { background, title, caption, logos } = section.logoSection;
          return (
            <div id={`section-${index}`}>
              <SimpleList
                title={title}
                caption={caption}
                backgroundGradient={parseInt(background, 10)}
              >
                {logos.map((logo) => (
                  <LogoPlaceholder key={logo} image={logo} />
                ))}
              </SimpleList>
            </div>
          );
        }

        if (sectionType === 'data-list') {
          const { background, title, caption, datas } = section.dataSection;
          return (
            <div id={`section-${index}`}>
              <SimpleList
                title={title}
                caption={caption}
                backgroundGradient={parseInt(background, 10)}
              >
                {datas.map((data) => (
                  <DataPlaceholder key={data.name} data={data} />
                ))}
              </SimpleList>
            </div>
          );
        }

        if (sectionType === 'card-list') {
          const { title, cards } = section.cardSection;

          return (
            <div id={`section-${index}`}>
              <AcademyList title={title} cards={cards} />
            </div>
          );
        }

        return null;
      })}
    </>
  );
}

export default Home;
