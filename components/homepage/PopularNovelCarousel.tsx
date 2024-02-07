import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import MangaData from '@/app/types/manga';
import { Badge } from '../ui/badge';

interface Props {
  data: MangaData | null;
}

const PopularNovelCarousel = ({ data }: Props) => {
  return (
    <>
      <h1 className="text-2xl">Popular Novels</h1>
      <div className="wrapper">
        <Carousel>
          <CarouselContent>
            {data?.data.map((item) => {
              return (
                <CarouselItem>
                  <div className="grid grid-cols-4 gap-5">
                    <img
                      src={item.images.webp.large_image_url || ''}
                      alt={item.title || 'Novel Image'}
                      className="h-full max-h-72 mx-auto col-span-2 sm:col-span-1"
                    />
                    <div className="flex flex-col col-span-2 sm:col-span-3 gap-3">
                      <h1 className="text-bold text-2xl">{item.title}</h1>
                      <div className="flex flex-row gap-3">
                        {item.genres.map((item) => (
                          <Badge key={item.mal_id}>{item.name} </Badge>
                        )) || <Badge>No Genres</Badge>}
                      </div>
                      <p className="line-clamp-5">{item.synopsis}</p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default PopularNovelCarousel;
