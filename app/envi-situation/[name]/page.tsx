import React from 'react';

const Page = async ({ params }: { params: { name: string } }) => {
  const { name } = params;
  
  return (
    <div>
      <div className='text-3xl'>Detail pages for {name}</div>
      <img />
    </div>
  );
};

export default Page;
