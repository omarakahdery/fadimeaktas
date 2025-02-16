"use client";
import React, { useEffect } from 'react';
import GLightbox from 'glightbox';

export const LightBox = ({ children, imgUrl }: { children: React.ReactNode, imgUrl: string }) => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '[data-gallery="image-gallery"]',
      touchNavigation: true,
      loop: true,
    });
    return () => {
      lightbox.destroy();
    };
  }, []);
  return (
    <a href={imgUrl} data-gallery="image-gallery">
      {children}
    </a>
  );
};