import React from "react";

export default function Jason() {
  return (
    <section className='jason'>
      <div className='max-w-lg jason-content'>
        <h1>Jason Duval</h1>
        <h2>Jason wants the easy life, but things just keep getting harder.</h2>
        <p>
          Jason grew up around grifters and crooks. After a stint in the Army
          trying to shake off his troubled teens, he found himself in the Keys
          doing what he knows best, working for local drug runners. it might be
          time to try something new...
        </p>
      </div>

      <div className='jason-2'>
        <img
          src='/images/jason-2.webp'
          alt='image of jason duval, a character in GTA VI'
        />
      </div>

      <div className='space-y-5 mt-96 img-box'>
        <div className='jason-1'>
          <img
            src='/images/jason-1.webp'
            alt='image of jason duval, a character in GTA VI'
          />
        </div>

        <div className='jason-3'>
          <img
            src='/images/jason-3.webp'
            alt='image of jason duval, a character in GTA VI'
          />
        </div>
      </div>
    </section>
  );
}
