import React, { useState, lazy, useEffect, Suspense } from 'react';
import menus from '../constant/menus';

const HomeSection = lazy(() => import('../components/HomeSection'));

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <Suspense fallback="Error">
      {menus.map((menu) => (
        <HomeSection id={menu.id} key={menu.id} background={menu.color}>
          <div>
            <h1>{menu.name}</h1>
            {menu.image && <img width={200} src={menu.image} />}
          </div>
        </HomeSection>
      ))}
    </Suspense>
  );
}

export default Home;
