import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const page = ({ params }: { params: { preview: string } }) => {
  return (
    <div className="wrapper">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <Card>
            <Image
              src={'https://cdn.myanimelist.net/images/manga/1/157897.jpg'}
              alt={''}
              height={3000}
              width={3000}
            ></Image>
          </Card>
        </div>
        <div className="grid gap-4 col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl capitalize">
                {params.preview}
              </CardTitle>
              <CardDescription className="text-1xl capitalize">
                Berserk: The Prototype
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Guts, a former mercenary now known as the \"Black Swordsman,\"
                is out for revenge. After a tumultuous childhood, he finally
                finds someone he respects and believes he can trust, only to
                have everything fall apart when this person takes away
                everything important to Guts for the purpose of fulfilling his
                own desires. Now marked for death, Guts becomes condemned to a
                fate in which he is relentlessly pursued by demonic beings.
                Setting out on a dreadful quest riddled with misfortune, Guts,
                armed with a massive sword and monstrous strength, will let
                nothing stop him, not even death itself, until he is finally
                able to take the head of the one who stripped him—and his loved
                one—of their humanity.
                <br /> <br />
                [Written by MAL Rewrite]
                <br /> <br />
                Included one-shot: Volume 14: Berserk: The Prototype
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
