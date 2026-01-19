import { useState } from 'react';

export function useProductDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  function handleProductClick(productId) {
    setIsDrawerOpen(true);
    setSelectedProductId(productId);
  }

  function handleCloseDrawer() {
    setIsDrawerOpen(false);
  }

  return {
    isDrawerOpen,
    selectedProductId,
    handleProductClick,
    handleCloseDrawer,
  };
}
