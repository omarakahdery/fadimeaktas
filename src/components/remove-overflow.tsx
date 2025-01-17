"use client";
import { useEffect } from "react";

export function RemoveOverflow(){
  useEffect(() => {
    // Find the element with the class 'bade'
    const badeElement = document.querySelector<HTMLElement>("body");

    // Remove the 'overflow: hidden' style if the element exists
    if (badeElement) {
      badeElement.style.overflow = ""; // Clear the overflow property
    }
  }, []);
  return <></>
}