'use client';
import React from 'react';
import useManga from '../api/useManga';
import PopularNovelCarousel from '@/components/homepage/PopularNovelCarousel';

const page = () => {
  const { data, loading, error } = useManga();

  return (
    <div className="wrapper">
      <PopularNovelCarousel data={data} />
    </div>
  );
};

export default page;
