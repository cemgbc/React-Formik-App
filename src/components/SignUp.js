import { useFormik } from "formik";
import validations from "./validations";

function SignUp() {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values, actions) => {
      
      setTimeout(() => {
        actions.resetForm();
      },1000)
    },
    validationSchema: validations,
  });
  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          autoFocus
        />
        {errors.firstName && touched.firstName && (
          <div className="error">{errors.firstName}</div>
        )}

        <br />
        <br />
        <label>Last Name</label>
        <input
          name="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.lastName && touched.lastName && (
          <div className="error">{errors.lastName}</div>
        )}
        <br />
        <br />
        <label>Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
        <br />
        <br />
        <label>Password</label>
        <input
          name="password"
          onBlur={handleBlur}
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br />
        <br />

        <label>Confirm Password</label>
        <input
          name="passwordConfirm"
          onBlur={handleBlur}
          value={values.passwordConfirm}
          onChange={handleChange}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default SignUp;