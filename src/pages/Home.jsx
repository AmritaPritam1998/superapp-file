import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.png";
import styles from"../pages/Home.module.css";



function Home() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if(!data.name || data.name.trim() === ""){
      errors.name = "Name is required";
    }
    if (!data.username || data.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (!data.email || data.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (!data.mobile || data.mobile.trim() === "") {
      errors.mobile = "Mobile is required";
    }
    if (!data.checkbox) {
      errors.checkbox = "Checkbox is required";
    }

    setErrors(errors);

    if(Object.keys(errors).length > 0){
      return;
    }else{
      alert("Form Submitted Successfully");
      localStorage.setItem("user", JSON.stringify(data));
      setData({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false,
      });
      navigate("/selection");
    }


  }
  return (
      
      <div style={{
        display:"flex",
        flexWrap:"nowrap",
        width:"100%",
        height:"100%",
        backgroundColor:"black",

      }}>
      <article
      className={styles.article}
      style={{ backgroundImage: `url(${bg.png})`}}
      >
      <h1 className={styles.header}>Discover new things on Superapp</h1>
      </article>
         
        <form
        onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width:"50%",
          height:"100%",
          marginLeft:"60px"
      
        }}
        >
        <h1 style={{color:"#72DB73",textAlign:"center",marginTop:"10px"}}>Super APP</h1>
        <h4 style={{color:"#ffff",textAlign:"center",marginTop:"0px"}}>Create Your New Account</h4>
        <input className={styles.input}
          type="text"
          name="name"
          placeholder="name"
          value={data.name}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.name}</span>

        <input className={styles.input}
          type="text"
          name="username"
          placeholder="username"
          value={data.username}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.username}</span>

        <input className={styles.input}
          type="email"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.email}</span>

        <input className={styles.input}
          type="tel"
          name="mobile"
          placeholder="mobile"
          value={data.mobile}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.mobile}</span>

         
          <label htmlFor="text"style={{color:"#ffff",fontSize:"20px"}}>
            Share my registration data with Superapp
          </label> <input 
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={handleInput}
          />
        
        <span style={{ color: "red", height: "20px" }}>{errors.checkbox}</span>
        
        <button type="submit"className={styles.button}>Sign up</button>
        
        <div className={styles.para}>
         <p>By clicking on Sign up. you agree to Superapp <span style={{color:"#72DB73"}}>
          Terms and Conditions of Use</span></p>
         <p>To learn more about how Superapp collects, uses, shares and 
          protects your personal data please head Superapp <span style={{color:"#72DB73"}}>
            Privacy Policy</span></p>
        </div>
        </form>
        
    </div>
    
      
    
    
  );
}
export default Home;

// # Homework
//  Largest Contentful Paint (LCP)
//  First Input Delay (FID)
//  Cumulative Layout Shift (CLS)
//  First Contentful Paint (FCP)
//  Explore React Hook Forms
