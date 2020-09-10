import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <>
      <h2>Instagram posts from @gatsbyjs</h2>
      <div>
        {instaPhotos.map(photo => (
          <>
            <h2>Instagram posts from @{username}</h2>
            <div>
              {instaPhotos.map(photo => (
                <a
                  key={photo.id}
                  href={`https://www.instagram.com/${username}`}
                  css={css`
                    box-shadow: 0;
                    display: block;
                    margin: 0.5rem;
                    max-width: 120px;
                    transition: 200ms box-shadow linear;

                    :focus,
                    :hover {
                      box-shadow: 0 2px 14px #22222244;
                      z-index: 10;
                    }
                  `}
                >
                  <Image
                    fluid={photo.fluid}
                    alt={photo.caption}
                    css={css`
                      width: 100%;

                      * {
                        margin-top: 0;
                      }
                    `}
                  />
                </a>
              ))}
            </div>
          </>
        ))}
      </div>
      <a href={`https://instagram.com/gatsbyjs`}>
        See more on Instagram &rarr;
      </a>
    </>
  );
};

export default Insta;
