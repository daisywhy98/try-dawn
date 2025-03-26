import React, { FC } from 'react';

interface PageProps {
  params: {
    name: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  const { name } = params;
  return (
    <div>
      <div className='text-3xl'>detail pages for {name}</div>
      <img />
    </div>
  );
}

export default Page;
