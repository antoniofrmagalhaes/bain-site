import React from 'react';

interface RenderCountryProps {
  country: string;
}

export default function RenderCountry({ country }: RenderCountryProps) {
  return <span className={`fi fi-${country.toLowerCase()}`} style={{ fontSize: '16px' }}></span>;
}
