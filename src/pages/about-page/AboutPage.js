import React, { } from 'react';

import style from './about-page.module.scss';

// *************************** ABOUT PAGE  *************************** //
const AboutPage = () => {
  return (
    <div className={style.aboutPage}>

      <div className={style.aboutLanding} />

      <div className={style.header}>
        <h2 className={style.title}>We Are What We Love</h2>
      </div>

      <div className={style.textContainer}>
        <p className={style.text}>
          Here's another instance where any area of your website -- not just the "About Us" page -- is an opportunity to break the mold.
        </p>
        <p className={style.text}>
          Many companies add just a simple mission statement or company profile, but people often don't want to ready a wall of text explaining what you do. So, Refinery29 broke it down to convey the intangible qualities that are tough to include in a basic "About Us" page.
        </p>
        <p className={style.text}>
          Although Refinery29 does introduce its page with a description of its business, its goes out on a bang -- four bangs, to be exact. The organization is on a "mission," sure, but there's also an "essence" of Refinery29, a "promise" it keeps, and a "vibe" it gives off.
        </p>
      </div>

    </div>
  )
};

export default AboutPage;