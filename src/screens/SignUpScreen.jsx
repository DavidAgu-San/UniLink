import "./SignUpScreen.css"
import { useState } from "react"

const SignUpScreen = ({ onSignUp, onGoToSignIn }) => {

  const [form, setForm] = useState({
    name: "",
    studentId: "",
    email: "",
    academicYear: "",
    graduationYear: "",
  })

  const [errors, setErrors] = useState({})

  // Update a single field in the form object
  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: "" }))
  }

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim())
      newErrors.name = "Please enter your information — authenticity and transparency builds trust"

    if (!form.studentId.trim())
      newErrors.studentId = "Please enter your information — authenticity and transparency builds trust"

    if (!form.email.trim()) {
      newErrors.email = "Please enter your information — authenticity and transparency builds trust"
    } else if (!form.email.endsWith(".edu")) {
      newErrors.email = "Please use a valid student email"
    }

    if (!form.academicYear.trim())
      newErrors.academicYear = "Please enter your information — authenticity and transparency builds trust"

    if (!form.graduationYear.trim()) {
      newErrors.graduationYear = "Please enter your information — authenticity and transparency builds trust"
    } else if (isNaN(form.graduationYear) || form.graduationYear.length !== 4) {
      newErrors.graduationYear = "Please enter a valid year"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onSignUp(form.name)
  }

  return (
    <form className="signup-screen" onSubmit={handleSubmit}>

      <div className="signup-logo-row">
        <img src="/logo.png" className="signup-logo-img" alt="UniLink" />
        <span className="signup-logo-text">UNILINK</span>
      </div>

      <div className="signup-divider" />

      <p className="signup-eyebrow">Create your account</p>

      <h1 className="signup-headline">
        Join your<br />campus<br /><em>community.</em>
      </h1>

      <p className="signup-subtitle">
        Real students only. Verified, safe, and built for you.
      </p>

      <div className="signup-spacer" />

      {/* Full Name */}
      <div className="signup-field">
        <p className="signup-label">Full Name</p>
        <input
          className={errors.name ? "signup-input error" : "signup-input"}
          type="text"
          placeholder="e.g. Jonathan Kuminga"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        {errors.name && <p className="signup-error">{errors.name}</p>}
      </div>

      {/* Student ID */}
      <div className="signup-field">
        <p className="signup-label">Student ID</p>
        <input
          className={errors.studentId ? "signup-input error" : "signup-input"}
          type="text"
          placeholder="e.g. 312374"
          value={form.studentId}
          onChange={(e) => handleChange("studentId", e.target.value)}
        />
        {errors.studentId && <p className="signup-error">{errors.studentId}</p>}
      </div>

      {/* Student Email */}
      <div className="signup-field">
        <p className="signup-label">Student Email</p>
        <input
          className={errors.email ? "signup-input error" : "signup-input"}
          type="email"
          placeholder="e.g. j.kuminga@jcsu.edu"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {errors.email && <p className="signup-error">{errors.email}</p>}
      </div>

      {/* Academic Year + Graduation Year side by side */}
      <div className="signup-row">
        <div className="signup-field half">
          <p className="signup-label">Academic Year</p>
          <input
            className={errors.academicYear ? "signup-input error" : "signup-input"}
            type="text"
            placeholder="e.g. Year 2"
            value={form.academicYear}
            onChange={(e) => handleChange("academicYear", e.target.value)}
          />
          {errors.academicYear && <p className="signup-error">{errors.academicYear}</p>}
        </div>
        <div className="signup-field half">
          <p className="signup-label">Graduation Year</p>
          <input
            className={errors.graduationYear ? "signup-input error" : "signup-input"}
            type="text"
            placeholder="e.g. 2027"
            value={form.graduationYear}
            onChange={(e) => handleChange("graduationYear", e.target.value)}
          />
          {errors.graduationYear && <p className="signup-error">{errors.graduationYear}</p>}
        </div>
      </div>

      <button className="signup-btn" type="submit">
        <span>Create my account</span>
        <span>→</span>
      </button>

      <p className="signup-signin">
        Already have an account?{" "}
        <span onClick={onGoToSignIn} className="signup-signin-link">
          Sign in
        </span>
      </p>

    </form>
  )
}

export default SignUpScreen