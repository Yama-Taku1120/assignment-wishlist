import React, {useState} from "react";

interface WishFormProps {
    onAddItem: (name: string, price: number) => void;
}

const WishForm: React.FC<WishFormProps> = ({ onAddItem }) => {
    const [name, setName] = useState('');
    const [price,setPrice] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const parsedPrice = parseInt(price);

        // check
        if (!name || isNaN(parsedPrice) || parsedPrice <= 0) {
            alert('有効な名前と金額を入力してください');
            return;
        }
        onAddItem(name, parsedPrice);
        setName('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
            type="text"
            placeholder="ほしいものの名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        <input
            type="number"
            placeholder="金額"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
        />
        <button type="submit" className="wish-formbutton">追加</button>
        </form>
    );
};

export default WishForm;