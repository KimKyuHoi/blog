import React, { useState } from 'react';
import type { PageProps } from 'gatsby';

const useCategory = (location: PageProps['location']) => {
  const [category, setCategory] = useState('전체');

  React.useEffect(() => {
    if (location.search) {
      const params = new URLSearchParams(location.search);
      const target = params.get('category');
      setCategory(target || '전체');
    } else {
      setCategory('전체');
    }
  }, [location.search]);

  const selectCategory = (newCategory: string) => {
    setCategory(newCategory);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (newCategory === '전체') {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', newCategory);
      }
      window.history.pushState({}, '', url.toString());
    }
  };

  return [category, selectCategory] as const;
};

export default useCategory;
