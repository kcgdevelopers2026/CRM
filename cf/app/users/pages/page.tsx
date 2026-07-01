"use client";

import { useState } from "react";
import styles from "./form.module.css";
import {
  FiUser,
  FiPhone,
  FiBriefcase,
  FiHome,
  FiUsers,
  FiShoppingBag,
  FiCalendar,
} from "react-icons/fi";

import Image from "next/image";
import logo from "../../../public/form.jpeg";

export default function FeedbackPage() {
  const [step, setStep] = useState(1);

  const [language, setLanguage] = useState<"English" | "Tamil">("English");

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    dob: "",
    profession: "",
    district: "", 
    branch: "",
    employee: "",
    product: "",
    purchased: "",
    rating: 0,
    suggestion: "",
    liked: "",
    recommend: "yes",
  });

const text =
  language === "English"
    ? {
        // Header
        title: "Customer Feedback",
        subtitle:
          "We value your feedback and always strive to provide the best jewellery shopping experience.",

        // Step 1
        customerName: "Customer Name",
        customerPlaceholder: "Enter Customer Name",

        phone: "Phone Number",
        phonePlaceholder: "Enter Phone Number",

        dob: "Date of Birth",

        profession: "Profession",
        professionPlaceholder: "Search Profession",

         district: "District",
districtPlaceholder: "Search District",


        branch: "Branch",
        branchPlaceholder: "Select Branch",

        employee: "Employee Attended",
        employeePlaceholder: "Search Employee",

        product: "Product Purchased",
        productPlaceholder: "Search Product",

        purchased: "Purchased Product?",
        purchasedPlaceholder: "Select Option",

        selectOption: "Select Option",

        yes: "Yes",
        no: "No",

        dateTime: "Date & Time",

        next: "Next",

        // Step 2
        feedbackTitle: "Share Your Feedback",

        feedbackText:
          "Your feedback helps us improve our service.",

        overallRating: "Overall Rating",

        suggestions: "Suggestions",

        suggestionPlaceholder:
          "Write your suggestions...",

        liked: "What did you like most?",

        likedPlaceholder:
          "Tell us what you liked...",

        recommend:
          "Would you recommend us?",

        maybe: "Maybe",

        thankTitle: "Thank You ❤️",

        thankMessage:
          "Thank you for taking the time to share your valuable feedback. We look forward to serving you again.",

        previous: "Previous",

        submit: "Submit Feedback",

        success:
          "Feedback Submitted Successfully!",

        footer:
          "All Rights Reserved.",
      }
    : {
        // Header
        title: "வாடிக்கையாளர் கருத்து",

        subtitle:
          "உங்கள் கருத்து எங்களுக்கு மிகவும் முக்கியமானது. சிறந்த சேவையை வழங்க எப்போதும் முயற்சிக்கிறோம்.",

        // Step 1
        customerName: "வாடிக்கையாளர் பெயர்",

        customerPlaceholder:
          "வாடிக்கையாளர் பெயரை உள்ளிடவும்",

        phone: "மொபைல் எண்",

        phonePlaceholder:
          "மொபைல் எண்ணை உள்ளிடவும்",

        dob: "பிறந்த தேதி",

        profession: "தொழில்",

        professionPlaceholder:
          "தொழிலை தேடவும்",


          district: "மாவட்டம்",
districtPlaceholder: "மாவட்டத்தை தேடவும்",

         
        branch: "கிளை",

        branchPlaceholder:
          "கிளையை தேர்வு செய்யவும்",

        employee: "பணியாளர்",

        employeePlaceholder:
          "பணியாளரை தேடவும்",

        product: "வாங்கிய பொருள்",

        productPlaceholder:
          "பொருளை தேடவும்",

        purchased:
          "பொருள் வாங்கினீர்களா?",

        purchasedPlaceholder:
          "தேர்வு செய்யவும்",

        selectOption:
          "தேர்வு செய்யவும்",

        yes: "ஆம்",

        no: "இல்லை",

        dateTime:
          "தேதி & நேரம்",

        next:
          "அடுத்து",

        // Step 2
        feedbackTitle:
          "உங்கள் கருத்தைப் பகிருங்கள்",

        feedbackText:
          "உங்கள் கருத்து எங்கள் சேவையை மேம்படுத்த உதவுகிறது.",

        overallRating:
          "மொத்த மதிப்பீடு",

        suggestions:
          "உங்கள் ஆலோசனைகள்",

        suggestionPlaceholder:
          "உங்கள் ஆலோசனைகளை எழுதுங்கள்...",

        liked:
          "உங்களுக்கு மிகவும் பிடித்தது என்ன?",

        likedPlaceholder:
          "உங்களுக்கு பிடித்ததை எழுதுங்கள்...",

        recommend:
          "எங்களை மற்றவர்களுக்கு பரிந்துரைப்பீர்களா?",

        maybe:
          "ஒருவேளை",

        thankTitle:
          "நன்றி ❤️",

        thankMessage:
          "உங்கள் மதிப்புமிக்க கருத்தைப் பகிர்ந்ததற்கு நன்றி. மீண்டும் உங்களுக்கு சேவை செய்ய ஆவலுடன் காத்திருக்கிறோம்.",

        previous:
          "முந்தையது",

        submit:
          "கருத்தை சமர்ப்பிக்கவும்",

        success:
          "கருத்து வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!",

        footer:
          "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      };

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

  return (
    <main className={styles.page}>
      
      

      <div className={styles.card}>

        <div className={styles.topBar}>
  <select
    className={styles.languageSelect}
    value={language}
    onChange={(e) =>
  setLanguage(e.target.value as "English" | "Tamil")
}
  >
    <option value="English">English</option>
    <option value="Tamil">தமிழ்</option>
  </select>
</div>


        
        <Image src={logo} alt="logo" className={styles.logos}/>


        <div className={styles.logoArea}>

          <h1>Customer Feedback</h1>

          <p>
            We value your feedback and always strive to
            provide the best jewellery shopping experience.
          </p>
        </div>

        <div className={styles.progress}>
          <div
            className={`${styles.circle} ${
              step >= 1 ? styles.active : ""
            }`}
          >
            1
          </div>

          <div className={styles.line}></div>

          <div
            className={`${styles.circle} ${
              step >= 2 ? styles.active : ""
            }`}
          >
            2
          </div>
        </div>

{step === 1 && (
  <>
    <label className={styles.formLabel}>
      {text.customerName}
    </label>

    <div className={styles.inputBox}>
      <FiUser />
      <input
        type="text"
        name="customerName"
        placeholder={text.customerPlaceholder}
        value={form.customerName}
        onChange={handleChange}
        required
      />
    </div>

    <label className={styles.formLabel}>
      {text.phone}
    </label>

    <div className={styles.inputBox}>
      <FiPhone />
      <input
        type="tel"
        name="phone"
        placeholder={text.phonePlaceholder}
        maxLength={10}
        value={form.phone}
        onChange={handleChange}
        required
      />
    </div>

    <label className={styles.formLabel}>
      {text.dob}
    </label>

    <div className={styles.inputBox}>
      <FiCalendar />
      <input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
        required
      />
    </div>

    <label className={styles.formLabel}>
      {text.profession}
    </label>

    <div className={styles.inputBox}>
      <FiBriefcase />

      <input
        list="professionList"
        name="profession"
        placeholder={text.professionPlaceholder}
        value={form.profession}
        onChange={handleChange}
        required
      />

      <datalist id="professionList">
        <option value="Businessman" />
        <option value="Businesswoman" />
        <option value="Government Employee" />
        <option value="Private Employee" />
        <option value="Doctor" />
        <option value="Engineer" />
        <option value="Teacher" />
        <option value="Lawyer" />
        <option value="Farmer" />
        <option value="Student" />
        <option value="Housewife" />
        <option value="Retired" />
        <option value="Others" />
      </datalist>
    </div>

    <label className={styles.formLabel}>
  {text.district}
</label>

<div className={styles.inputBox}>
  <FiHome />

  <input
    list="districtList"
    name="district"
    placeholder={text.districtPlaceholder}
    value={form.district}
    onChange={handleChange}
    required
  />

  <datalist id="districtList">
  <option value="Ariyalur" />
  <option value="Chengalpattu" />
  <option value="Chennai" />
  <option value="Coimbatore" />
  <option value="Cuddalore" />
  <option value="Dharmapuri" />
  <option value="Dindigul" />
  <option value="Erode" />
  <option value="Kallakurichi" />
  <option value="Kanchipuram" />
  <option value="Kanyakumari" />
  <option value="Karur" />
  <option value="Krishnagiri" />
  <option value="Madurai" />
  <option value="Mayiladuthurai" />
  <option value="Nagapattinam" />
  <option value="Namakkal" />
  <option value="Nilgiris" />
  <option value="Perambalur" />
  <option value="Pudukkottai" />
  <option value="Ramanathapuram" />
  <option value="Ranipet" />
  <option value="Salem" />
  <option value="Sivagangai" />
  <option value="Tenkasi" />
  <option value="Thanjavur" />
  <option value="Theni" />
  <option value="Thoothukudi" />
  <option value="Tiruchirappalli" />
  <option value="Tirunelveli" />
  <option value="Tirupathur" />
  <option value="Tiruppur" />
  <option value="Tiruvallur" />
  <option value="Tiruvannamalai" />
  <option value="Tiruvarur" />
  <option value="Vellore" />
  <option value="Viluppuram" />
  <option value="Virudhunagar" />
  <option value="Other State" />
</datalist>
</div>

    <label className={styles.formLabel}>
      {text.branch}
    </label>

  <div className={styles.inputBox}>
  <FiHome />

  <select
    name="branch"
    value={form.branch}
    onChange={handleChange}
    required
  >
    <option value="">{text.branchPlaceholder}</option>
    <option value="Tuticorin">Tuticorin</option>
    <option value="Tirunelveli">Tirunelveli</option>
    <option value="Eral">Eral</option>
    <option value="Tiruchendur">Tiruchendur</option>
    <option value="Dindigul">Dindigul</option>
  </select>
</div>

   

   <label className={styles.formLabel}>
  {text.employee}
</label>

<div className={styles.inputBox}>
  <FiUsers />

  <input
    type="text"
    name="employee"
    placeholder={text.employeePlaceholder}
    value={form.employee}
    onChange={handleChange}
    required
  />
</div>

 

   

   <label className={styles.formLabel}>
  {text.purchased}
</label>

<div className={styles.toggleContainer}>
  <button
    type="button"
    className={`${styles.toggleBtn} ${
      form.purchased === "Yes" ? styles.activeYes : ""
    }`}
    onClick={() =>
      setForm((prev) => ({ ...prev, purchased: "Yes" }))
    }
  >
    ✅ {text.yes}
  </button>

  <button
    type="button"
    className={`${styles.toggleBtn} ${
      form.purchased === "No" ? styles.activeNo : ""
    }`}
    onClick={() =>
      setForm((prev) => ({ ...prev, purchased: "No" }))
    }
  >
    ❌ {text.no}
  </button>
</div>


  
    <br />

    <button
      className={styles.nextBtn}
      onClick={() => setStep(2)}
    >
      {text.next} 
    </button>
  </>
)}
      {step === 2 && (
  <>
    <h2 className={styles.feedbackTitle}>
      {text.feedbackTitle}
    </h2>

    <p className={styles.rateText}>
      {text.feedbackText}
    </p>

    <label className={styles.formLabel}>
      {text.overallRating}
    </label>

    <div className={styles.starRow}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={
            star <= form.rating
              ? styles.activeStar
              : styles.star
          }
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              rating: star,
            }))
          }
        >
          ★
        </span>
      ))}
    </div>

    <label className={styles.formLabel}>
      {text.suggestions}
    </label>

    <textarea
      className={styles.textArea}
      name="suggestion"
      placeholder={text.suggestionPlaceholder}
      rows={5}
      value={form.suggestion}
      onChange={handleChange}
    />

    <label className={styles.formLabel}>
      {text.liked}
    </label>

    <textarea
      className={styles.textArea}
      name="liked"
      placeholder={text.likedPlaceholder}
      rows={5}
      value={form.liked}
      onChange={handleChange}
    />

    <label className={styles.formLabel}>
      {text.recommend}
    </label>

    <div className={styles.radioContainer}>
      <label
        className={`${styles.radioCard} ${
          form.recommend === "yes" ? styles.selected : ""
        }`}
      >
        <input
          type="radio"
          name="recommend"
          value="yes"
          checked={form.recommend === "yes"}
          onChange={handleChange}
        />
        <span className={styles.emoji}>😊</span>
        <span>{text.yes}</span>
      </label>

      <label
        className={`${styles.radioCard} ${
          form.recommend === "maybe" ? styles.selected : ""
        }`}
      >
        <input
          type="radio"
          name="recommend"
          value="maybe"
          checked={form.recommend === "maybe"}
          onChange={handleChange}
          required
        />
        <span className={styles.emoji}>🙂</span>
        <span>{text.maybe}</span>
      </label>

      <label
        className={`${styles.radioCard} ${
          form.recommend === "no" ? styles.selected : ""
        }`}
      >
        <input
          type="radio"
          name="recommend"
          value="no"
          checked={form.recommend === "no"}
          onChange={handleChange}
        />
        <span className={styles.emoji}>☹️</span>
        <span>{text.no}</span>
      </label>
    </div>

    <div className={styles.thankBox}>
      <h3>{text.thankTitle}</h3>
      <p>{text.thankMessage}</p>
    </div>

    <div className={styles.buttonRow}>
      <button
        className={styles.backBtn}
        onClick={() => setStep(1)}
      >
        {text.previous}
      </button>

      <button
        className={styles.submitBtn}
        onClick={async () => {
  try {
    const res = await fetch("https://crm-w43b.onrender.com/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert(text.success);
      setStep(1);

      // reset form
      setForm({
  customerName: "",
  phone: "",
  dob: "",
  profession: "",
  district: "",   // <-- Add this
  branch: "",
  employee: "",
  product: "",
  purchased: "",
  rating: 0,
  suggestion: "",
  liked: "",
  recommend: "yes",
});
    } else {
      alert("Failed to submit");
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
}}
      >
        {text.submit}
      </button>
    </div>

    <footer className={styles.footer}>
      © 2026 K.Chinnadurai Gold House Pvt. Ltd.{" "}
      {text.footer}
    </footer>
  </>
)} 

      </div>

      <img
        src="/bottom-wave.png"
        alt=""
        className={styles.bottom}
      />

    </main>
  );
}