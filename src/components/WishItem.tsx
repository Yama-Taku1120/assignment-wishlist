import React from "react";

// アイテムのデータ型を定義
export type WishItemType = {
    id: number;
    name: string;
    price: number;
    isPurchased: boolean;
};

// コンポーネントが受け取る型
interface WishItemProps {
    item: WishItemType;
    onToggle: (id: number) => void;
}

const WishItem: React.FC<WishItemProps> = ({ item, onToggle }) => {
    const rowClassName = item.isPurchased
        ? 'wish-item-row is-purchased'
        : 'wish-item-row';

    return (
        <div className={rowClassName}>
            <input
                type="checkbox"
                checked={item.isPurchased}
                onChange={() => onToggle(item.id)}
            />
            <span className="wish-item-price">
                {item.name} - <span className="wish-item-price">¥{item.price.toLocaleString()}</span>
            </span>
        </div>
    );
};

export default WishItem;