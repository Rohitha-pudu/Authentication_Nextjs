import Link from 'next/link';
import React from 'react'

const page = () => {
  const a=true;
  return (
    <section className='mt-12'>
      {a===true ? (
<div className="grid sm:grid-cols-1 gap-4 md:grid-cols-3">
  <div className="min-h-[100px] bg-orange-500"></div>
  <div className="min-h-[100px] bg-teal-500"></div>
  <div className="min-h-[100px] bg-black"></div>
  <div></div>
</div>
): (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No users yet</p>
            <Link href="" className="mt-2 font-bold text-accent-blue">
              Join to be the first!
            </Link>
          </div>
  )}
  </section>
  )
}

export default page

