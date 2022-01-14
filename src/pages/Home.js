import React from 'react';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import HomeCover from '../components/HomeCover/HomeCover';
import LogoList from '../components/LogoList';

const features = [
  {
    title: 'Ready when you need it',
    description:
      'Bear works on iPhone, iPad, and Mac, so you can write wherever inspiration strikes. Use todos to stay on task across every device.',
  },
  {
    title: 'Organize easily',
    description:
      'Link notes to each other to build a body of work. Add hashtags to organize the way you think. Use Face/Touch ID to protect sensitive notes.',
  },
  {
    title: 'Write your way',
    description:
      "Bear is perfect for everything from quick notes to in-depth essays. A focus mode helps you concentrate, and advanced markup options are an online writer's best friend. Full in-line image support brings your writing to life.",
  },
  {
    title: 'Gorgeous settings',
    description:
      'Packed with beautiful themes and typography and Dark Mode, Bear makes your writing look great before and after publishing.',
  },
];

function Home() {
  return (
    <>
      <HomeCover />

      <LogoList />

      <FeatureSection features={features} backgroundGradient />

      <FeatureSection features={features.slice(0, 2)} reverse />

      <FeatureSection features={features} />
    </>
  );
}

export default Home;
