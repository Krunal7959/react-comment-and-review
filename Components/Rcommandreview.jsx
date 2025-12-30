import React, { useState, useRef } from "react";
import "./Rcommandreview.css";

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
