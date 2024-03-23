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
      <a href="/latest">
        <h1 className="text-2xl mb-6">Latest Novels</h1>
      </a>
      <LatestUpdates data={data} show={8} />
    </div>
  );
};

export default page;
