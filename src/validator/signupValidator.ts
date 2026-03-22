const isEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return String(email).toLowerCase().match(emailRegex) !== null;
}

type SignupFormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

type SignupValidationErrors = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const signupValidator = (formData: SignupFormData): SignupValidationErrors => {
    const errors: SignupValidationErrors = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    if (!formData.name.trim()) {
        errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!isEmail(formData.email)) {
        errors.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
        errors.password = 'Password is required';
    }else if (formData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;

}

export default signupValidator;