import { useState } from 'react';

import { SearchFilter, TripType } from '../types';

export function useSearchFilter() {
  const [filter, setFilter] = useState<SearchFilter>({
    guests: 2,
    tripTypes: [],
    areas: [],
  });

  const toggleTripType = (type: TripType) => {
    setFilter((prev) => ({
      ...prev,
      tripTypes: prev.tripTypes.includes(type)
        ? prev.tripTypes.filter((t) => t !== type)
        : [...prev.tripTypes, type],
    }));
  };

  const toggleArea = (area: string) => {
    setFilter((prev) => ({
      ...prev,
      areas: prev.areas.includes(area)
        ? prev.areas.filter((a) => a !== area)
        : [...prev.areas, area],
    }));
  };

  return {
    filter,
    setFilter,
    toggleTripType,
    toggleArea,
  };
}
