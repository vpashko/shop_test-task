import { useState } from 'react';
import './NewProductModal.scss'
import { Product } from '../../types/Product';

interface NewProductModalProps {
    onClose: () => void;
    onAdd: (product: Product) => void;
}

export default function NewProductModal( { onClose, onAdd }: NewProductModalProps) {
    const [imageUrl, setImageUrl] = useState("");
    const [name, setName] = useState("");
    const [count, setCount] = useState(0);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [weight, setWeight] = useState(0);
    const [comments, setComments] = useState("");

    const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrl(event.target.value);
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(parseInt(event.target.value));
    };

    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(parseInt(event.target.value));
    };

    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWidth(parseInt(event.target.value));
    };

    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(parseInt(event.target.value));
    };

    const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComments(event.target.value);
    };


    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if (!imageUrl || !name || !count || !height || !width || !weight || !comments) {
            alert('Please fill all fields');
            return;
        }

        const newProduct: Product = {
            id: Math.floor(Math.random() * 1000),
            imageUrl: imageUrl,
            name: name,
            count: count,
            size: { height: height, width: width },
            weight: weight,
            comments: comments.split('\n'),
        };

        onAdd(newProduct);
        onClose();
    }


    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="modal-title">Add New Product</h2>
                <form className="modal-form">
                    <label className="modal-label" htmlFor='image'>ImageUrl</label>
                    <input className="modal-input" type="text" id="image" name="image" onChange={handleImageUrlChange}/>
                    <label className="modal-label" htmlFor="name">Name</label>
                    <input className="modal-input" type="text" id="name" name="name" onChange={handleNameChange}/>
                    <label className="modal-label" htmlFor="count">Count</label>
                    <input className="modal-input" type="number" id="count" name="count" onChange={handleCountChange}/>
                    <label className="modal-label" htmlFor="height">Height</label>
                    <input className="modal-input" type="number" id="height" name="height" onChange={handleHeightChange}/>
                    <label className="modal-label" htmlFor="width">Width</label>
                    <input className="modal-input" type="number" id="width" name="width" onChange={handleWidthChange}/>
                    <label className="modal-label" htmlFor="weight">Weight</label>
                    <input className="modal-input" type="number" id="weight" name="weight" onChange={handleWeightChange}/>
                    <label className="modal-label" htmlFor="comments">Comments</label>
                    <textarea className="modal-textarea" id="comments" name="comments" onChange={handleCommentsChange}></textarea>
                    <div className='modal-buttons'>
                        <button className="modal-button-add" onClick={handleSubmit}>Add</button>
                        <button className="modal-button-close" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}