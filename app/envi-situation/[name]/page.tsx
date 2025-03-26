import React from 'react';

const Page = async ({ params }: { params: { name: string } }) => {
  return (
    <div>
      <div className='text-3xl'>Detail pages for {params.name}</div>
      <img />
    </div>
  );
};

export default Page;