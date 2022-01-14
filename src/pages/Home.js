import React from 'react';
import AcademyList from '../components/AcademyList';
import DataPlaceholder from '../components/DataPlaceholder';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import HomeCover from '../components/HomeCover/HomeCover';
import LogoPlaceholder from '../components/LogoPlaceholder';
import SimpleList from '../components/SimpleList';
import features from '../constant/features';

function Home() {
  return (
    <>
      <HomeCover />

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

      <FeatureSection features={features} backgroundGradient={2} />

      <FeatureSection features={features.slice(0, 2)} reverse />

      <FeatureSection features={features} />

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
