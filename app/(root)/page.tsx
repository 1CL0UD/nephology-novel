'use client';
import React from 'react';
import useManga from '../api/useManga';
import PopularNovelCarousel from '@/components/homepage/PopularNovelCarousel';
import LatestUpdates from '@/components/homepage/LatestUpdates';

const page = () => {
  const { data, loading, error } = useManga();

  return (
    <div className="wrapper">
      <PopularNovelCarousel data={data} />
      <LatestUpdates data={data} show={8} />
    </div>
  );
};

export default page;
