module.exports.signUpErrors = (err) => {
    let errors = { firstName : '', lastName : '', email : '', password : '', birthday : '', job : '' };

    if (err.message.includes('firstName')) 
        errors.firstName = 'First name is invalid';
    if (err.message.includes('lastName'))
        errors.lastName = 'Last name is invalid';
    if (err.message.includes('email'))
        errors.email = 'Email is invalid or already taken';
    if (err.message.includes('password'))
        errors.password = 'Password is invalid the minimum length is 8 characters';
    if (err.message.includes('birthday'))
        errors.birthday = 'Birthday is invalid';
    if (err.message.includes('job'))
        errors.job = 'Job is invalid';

    return errors;
}

module.exports.loginErrors = (err) => {
    let errors = { email : '', password : '' };

    if (err.message.includes('email'))
        errors.email = 'Email is invalid or password is invalid';
    if (err.message.includes('password'))
        errors.password = 'Email is invalid or Password is invalid';
    return errors;
}