import React, { useState, useRef } from "react";

export default function ReviewForm() {
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [reviews, setReviews] = useState([]);

    const commentRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const comment = commentRef.current.value;
        const email = emailRef.current.value;

        if (name === "" || comment === "" || rating === "" || email === "") {
            alert("Please fill all fields");
            return;
        }

        const newReview = {
            id: Date.now(),
            name: name,
            comment: comment,
            rating: rating,
            email: email
        };

        setReviews([...reviews, newReview]);

        setName("");
        setRating("");

        commentRef.current.value = "";
        emailRef.current.value = "";
    };

    return (
        <div className="review-container">
            <style>{`
                .review-container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 30px 20px;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                        sans-serif;
                    background: #f5f5f5;
                    min-height: 100vh;
                }

                .review-container h2 {
                    text-align: center;
                    color: #333;
                    margin-bottom: 30px;
                    font-size: 2em;
                    font-weight: 600;
                }

                .review-container form {
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    margin-bottom: 30px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .review-container label {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .review-container label strong {
                    color: #333;
                    font-size: 14px;
                    font-weight: 600;
                }

                .review-container input,
                .review-container textarea,
                .review-container select {
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #e0e0e0;
                    border-radius: 8px;
                    font-size: 16px;
                    font-family: inherit;
                    transition: all 0.3s ease;
                    box-sizing: border-box;
                }

                .review-container input:focus,
                .review-container textarea:focus,
                .review-container select:focus {
                    outline: none;
                    border-color: #007bff;
                    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
                }

                .review-container textarea {
                    resize: vertical;
                    min-height: 120px;
                    font-family: inherit;
                }

                .review-container select {
                    cursor: pointer;
                    background: white;
                    appearance: none;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 15px center;
                    padding-right: 40px;
                }

                .review-container button {
                    padding: 14px 28px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    margin-top: 10px;
                }

                .review-container button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
                }

                .review-container button:active {
                    transform: translateY(0);
                }

                .review-container hr {
                    border: none;
                    border-top: 2px solid #e0e0e0;
                    margin: 30px 0;
                }

                .review-container > p {
                    text-align: center;
                    color: #999;
                    font-style: italic;
                    padding: 40px 20px;
                    background: #f9f9f9;
                    border-radius: 8px;
                }

                .review-card {
                    background: #f9f9f9;
                    padding: 20px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    border-left: 4px solid #667eea;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                    animation: slideIn 0.3s ease-out;
                }

                .review-card:hover {
                    transform: translateX(5px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    background: #fff;
                }

                .review-card:last-child {
                    margin-bottom: 0;
                }

                .review-card h4 {
                    color: #667eea;
                    margin: 0 0 10px 0;
                    font-size: 1.2em;
                    font-weight: 600;
                }

                .review-card p {
                    color: #555;
                    line-height: 1.6;
                    margin: 10px 0;
                }

                .review-card p:last-child {
                    color: #667eea;
                    font-weight: 500;
                    margin-top: 15px;
                    font-size: 1.1em;
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @media (max-width: 768px) {
                    .review-container {
                        padding: 20px 15px;
                    }

                    .review-container h2 {
                        font-size: 1.5em;
                    }

                    .review-container form {
                        padding: 20px;
                    }

                    .review-card {
                        padding: 15px;
                    }
                }
            `}</style>
            <h2>Comment & Reviews</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <strong>Name:</strong>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label>
                    <strong>Email :</strong>
                    <input
                        type="email"
                        placeholder="Your Email"
                        ref={emailRef}
                    />
                </label>

                <label>
                    <strong>Comment :</strong>
                    <textarea
                        placeholder="Your Comment"
                        ref={commentRef}
                    />
                </label>

                <label>
                    <strong>Rating :</strong>
                    <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        <option value="">Select Rating</option>
                        <option value="1">⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                    </select>
                </label>

                <button type="submit">Submit Review</button>
            </form>

            <hr />

            {reviews.length === 0 ? (
                <p>No reviews added</p>
            ) : (
                reviews.map((item) => (
                    <div className="review-card" key={item.id}>
                        <h4>{item.name}</h4>
                        <p><strong>Email:</strong> {item.email}</p>
                        <p>{item.comment}</p>
                        <p>{"⭐".repeat(Number(item.rating))}</p>
                    </div>
                ))
            )}
        </div>
    );
}
