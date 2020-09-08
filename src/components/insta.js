import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <>
      <h2>Instagram posts from @kevdeveloper</h2>
      <div>
        {instaPhotos.map(photo => ())}
      </div>
      <a href={`https://instagram.com/kevdeveloper`}>
        See more on Instagram &rarr;
      </a>
    </>
  );
};

export default Insta;
