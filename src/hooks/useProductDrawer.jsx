import { useState } from 'react';

export function useProductDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductClick = productId => {
    setIsDrawerOpen(true);
    setSelectedProductId(productId);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return {
    isDrawerOpen,
    selectedProductId,
    handleProductClick,
    handleCloseDrawer,
  };
}
