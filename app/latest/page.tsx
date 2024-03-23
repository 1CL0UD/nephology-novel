'use client';

import React from 'react';
import useManga from '../api/useManga';
import LatestUpdates from '@/components/homepage/LatestUpdates';

const page = () => {
  const { data, loading, error } = useManga();
  return (
    <div className="wrapper">
      <h1 className="text-2xl mb-6">Latest Novels</h1>
      <LatestUpdates data={data} show={30} />
    </div>
  );
};

export default page;
