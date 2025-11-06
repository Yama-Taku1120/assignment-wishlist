import React, { useState } from 'react';
import WishItem, { type WishItemType } from './WishItem.tsx';
import WishForm from './WishForm.tsx';

// test
const initialList: WishItemType[] = [
  { id: 1, name: 'keyboard', price: 15000, isPurchased: false },
  { id: 2, name: 'monitor', price: 100000, isPurchased: false},
];

const WishList: React.FC = () => {
  // ほしいものリストのデータたち
  const [items, setItems] = useState<WishItemType[]>(initialList);

  // 追加
  const addItem = (name: string, price: number) => {
    const newItem: WishItemType = {
      id: Date.now(), // unique ID
      name,
      price,
      isPurchased: false,
    };
    setItems(prevItems => [...prevItems, newItem]);
  };

  // 購入したかを変更
  const togglePurchased = (id: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, isPurchased: !item.isPurchased } : item
      )
    );
  };

  return (
    <div className='wishlist-container'>
      <h1 className='title'>ほしいものリスト</h1>
      <WishForm onAddItem={addItem} />
      {items.map(item => (
        <WishItem
          key={item.id}
          item={item}
          onToggle={togglePurchased}
        />
      ))}
    </div>
  );
};

export default WishList;