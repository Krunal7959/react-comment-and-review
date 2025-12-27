// import React, { useState } from 'react';

// function Counter() {
//   const [state, setstate] = useState('');
//   const [text, settext] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   function handaletext(e) {
//     setstate(e.target.value);
//   }

//   function handalesubmit(e) {
//     e.preventDefault();
//     if (state.trim() === '') return;

//     const updated = [...text];

//     if (editIndex !== null) {

//       updated.splice(editIndex, 1, state);
//       settext(updated);
//       setEditIndex(null);
//     } else {
//       updated.push(state);
//       settext(updated);
//     }

//     setstate('');
//   }

//   function handleDelete(index) {
//     const updated = [...text];
//     updated.splice(index, 1);
//     settext(updated);
//   }

//   function handleEdit(index) {
//     setstate(text[index]);
//     setEditIndex(index);
//   }

//   return (
//     <div>
//       <h1> Todo List</h1>
//       <form onSubmit={handalesubmit}>
//         <input
//           type="text"
//           value={state}
//           onChange={handaletext}
//         />
//         <button type="submit">
//           {editIndex !== null ? 'Update' : 'Add'}
//         </button>
//       </form>

//       <ul>
//         {text.map((el, i) => (
//           <li key={i}>
//             {el}
//             <button onClick={() => handleEdit(i)}>Edit</button>
//             <button onClick={() => handleDelete(i)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Counter;


import React, { use, useEffect ,useRef} from "react";

function FromValidation() {
    const inputRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef=useRef(null);

    return (
        <div className="container d-flex flex-column align-items-center">
            <h1>Form Validation </h1>
            <form>
                <label >Name :</label>
                <input type="text" placeholder="Enter Your Name"  ref={inputRef} />
                <label >Email :</label>
                <input type="email" placeholder="Enter email"  ref={emailRef} />
                <label >Password :</label>
                <input type="password" placeholder="Enter password"  ref={passwordRef} />

                <button className="btn btn-primary my-2" onClick={(e) => {
                    if(inputRef.current.value === "") {
                        e.preventDefault();
                        alert("Name is required");
                    }else if(emailRef.current.value === "") {
                        e.preventDefault();
                        alert("Email is required");
                    }else if(passwordRef.current.value === "") {
                        e.preventDefault();
                        alert("Password is required");
                    } else {
                        alert("Form submitted successfully");   
                    }
                }
                }>Submit</button>



            </form>
        </div>
    );
}
export default FromValidation;




// import React, { useRef } from "react";

// function UseRefForm() {
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = {
//       name: nameRef.current.value,
//       email: emailRef.current.value,
//       password: passwordRef.current.value,
//     };

//     console.log("Form Data:", formData);
//     alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Form using useRef</h2>

//       <div>
//         <label>Name: </label>
//         <input type="text" ref={nameRef} placeholder="Enter name" />
//       </div>

//       <br />

//       <div>
//         <label>Email: </label>
//         <input type="email" ref={emailRef} placeholder="Enter email" />
//       </div>

//       <br />

//       <div>
//         <label>Password: </label>
//         <input type="password" ref={passwordRef} placeholder="Enter password" />
//       </div>

//       <br />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default UseRefForm;


