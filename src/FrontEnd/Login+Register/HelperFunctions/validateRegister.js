const validateRegister = (form) => {
    let errors = {};
    if (!form.email) {
        errors.email = "Email is required";
    }
    if (form.email.length < 10) {
        errors.email = "Email is too short";
    }
    if (!form.email.includes("@")) {
        errors.email = "Email is invalid";
    }
    if (!form.password) {
        errors.password = "Password is required";
    }
    if (form.password.length < 5) {
        errors.password = "Password is too short";
    }
    if (!form.confirmPassword) {
        errors.confirmPassword = "Confirm password is required";
    }
    if (form.confirmPassword !== form.password) {
        errors.confirmPassword = "Passwords do not match";
    }
    if (!form.dateOfBirth) {
        errors.dateOfBirth = "Date of birth is required";
    }
    if (!form.firstName) {
        errors.firstName = "First name is required";
    }
    if (!form.lastName) {
        errors.lastName = "Last name is required";
    }
    if (!form.gender) {
        errors.gender = "Gender is required";
    }
    return errors;
};

export default validateRegister;