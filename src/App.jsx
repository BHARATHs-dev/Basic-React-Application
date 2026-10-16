// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


// import './App.css';
// import assets from './assets/sample iggg.webp';
// import Button from './component/ui/button/index.jsx';

// const App = () => {
//   return (
//     <div>
//       <h1 className="heading">Hello React</h1>

//       <Button name="Hello Welcome to React" onClick={()=>console.log('Alert !!! button clicked')} />

//       <img src={assets} className="Sample" alt="Sample" />
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         'https://jsonplaceholder.typicode.com/users'
//       );
//       const users = await response.json();
//       setData(users);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <label>Counter: {counter}</label>

//       <button onClick={() => setCounter(counter + 1)}>
//         Increment
//       </button>
      
//       <button onClick={() => setCounter(counter - 1)}>
//         Decrement
//       </button>

//       <h1 className="title">User Details</h1>

//       <div>
//         {data.map((user) => (
//           <div className="form" key={user.id}>
//             <h2>User Details</h2>

//             <label>Name</label>
//             <input value={user.name} readOnly />

//             <label>Email</label>
//             <input value={user.email} readOnly />

//             <label>Phone</label>
//             <input value={user.phone} readOnly />

//             <label>Street</label>
//             <input value={user.address.street} readOnly />

//             <label>City</label>
//             <input value={user.address.city} readOnly />

//             <label>Zip</label>
//             <input value={user.address.zipcode} readOnly />

//             <label>Suite</label>
//             <input value={user.address.suite} readOnly />

//             <label>Latitude</label>
//             <input value={user.address.geo.lat} readOnly />

//             <label>Longitude</label>
//             <input value={user.address.geo.lng} readOnly />

//             <label>Geo</label>
//             <input
//               value={JSON.stringify(user.address.geo)}
//               readOnly
//             />

//             <label>Company</label>
//             <input value={user.company.name} readOnly />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;



// task to use the open api to fetch the data and images 
// import { useState, useEffect } from "react";
// import "./App.css";
// import formattedObject from "./Title.jsx";

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [status, setStatus] = useState(null);

//   console.log(formattedObject);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://dummyjson.com/products?limit=12"
//         // "https://dummyjson.com/invalid-url"
//       );

//       console.log(response, "response");

//       setStatus(response.status);

//       if (!response.ok) {
//         setError("Failed to fetch products");
//         setLoading(false);
//         return;
//       }

//       const products = await response.json();

//       console.log(products, "products");

//       setData(products.products);
//       setSuccess(true);
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   const filteredData = data.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   if (error) {
//     return <h1>Error: {error}</h1>;
//   }

//   return (
//     <div className="container">
//       <h1>Product Store</h1>

//       <p>HTTP Status: {status}</p>

//       {success && <p>Products loaded successfully!</p>}

//       <input 
//   type="text"
//   placeholder="Search products..."
//   value={searchTerm}
//   onChange={(e) => {
//     setSearchTerm(e.target.value);
//     console.log("Search Value:", e.target.value);
//   }}
// />
    
//       <div className="product-grid">
//         {filteredData.length > 0 ? (
//           filteredData.map((product) => (
//             <div className="card" key={product.id}>
//               <img
//                 src={product.thumbnail}
//                 alt={product.title}
//               />

//               <h3>{product.title}</h3>
//               <p>{product.description}</p>
//               <h4>Price: ${product.price}</h4>
//               <p>Rating: {product.rating}</p>

//               <a
//                 href={product.images[0]}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Product
//               </a>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

  

//parent:owns the state

// import { useState } from "react";
// import Title from "./Title.jsx";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Title count={count} />
//       <button onClick={() => setCount(count + 1)}>Count is {count}</button>
//     </div>
//   );
// }

// export default App;




import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    course: "react",
    address: "",
    city: "",
    file: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form Data:", form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
          required
        />
        <br></br>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <br></br>

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
          required
        />
        <br></br>

        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Enter age"
          required
        />
        <br></br>

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter phone"
          required
        />
        
        <br></br>
        <input type="address" name="address" value={form.address} onChange={handleChange} placeholder="Enter address" required /> 
        <br></br>
        <input type="city" name="city" value={form.city} onChange={handleChange} placeholder="Enter city" required /> 
        <br></br>
        <input type="file" name="file" value={form.file} onChange={handleChange} placeholder="Enter file" required /> 
        <br></br>

        <label htmlFor="course">Select a course:</label>

        <select
          id="course"
          name="course"
          value={form.course}
          onChange={handleChange}
        >
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
        </select>
        <br></br>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <>
          <h3>Form Output</h3>
          <p>First Name: {form.firstName}</p>
          <p>Email: {form.email}</p>
          <p>Age: {form.age}</p>
          <p>Phone: {form.phone}</p>
          <p>Password: {form.password}</p>
          <p>Address: {form.address}</p>
          <p>City: {form.city}</p>
          <p>File: {form.file}</p>
          <p>Course: {form.course}</p>
        </>
      )}
    </>
  );
};

export default App;
