'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import React from 'react';
import useManga from '../api/useManga';
import Image from 'next/image';

const page = () => {
  const { data, loading, error } = useManga();

  return (
    <div className="wrapper">
      <h1 className="text-2xl">Popular Novels</h1>
      <div className="wrapper">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="grid grid-cols-4">
                <img
                  src={data?.data.images.webp.small_image_url || ''}
                  alt={data?.data.title || 'Novel Image'}
                  className="h-full mx-auto"
                />
                <div className="flex flex-col col-span-3 gap-3">
                  <h1 className="text-bold text-2xl">{data?.data.title}</h1>
                  <div className="flex flex-row gap-3">
                    {data?.data.genres.map((item) => (
                      <Badge key={item.mal_id}>{item.name} </Badge>
                    )) || <Badge>No Genres</Badge>}
                  </div>
                  <p>{data?.data.synopsis}</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default page;
