import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import MangaData from '@/app/types/manga';

interface Props {
  data: MangaData | null;
}

const LatestUpdates = ({ data }: Props) => {
  return (
    <>
      <a href="/latest">
        <h1 className="text-2xl mb-6">Latest Novels</h1>
      </a>
      <div className="grid grid-cols-4 gap-4">
        {data?.data.map((item, index) => {
          return (
            index < 8 && (
              <Card>
                <CardHeader>
                  <Image
                    src={item.images.webp.small_image_url}
                    alt={item.title}
                    width={20}
                    height={20}
                  />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="truncate">
                    {item.title_synonyms}
                  </CardDescription>
                </CardHeader>
                <CardContent className="truncate">{item.synopsis}</CardContent>
              </Card>
            )
          );
        })}
      </div>
    </>
  );
};

export default LatestUpdates;
