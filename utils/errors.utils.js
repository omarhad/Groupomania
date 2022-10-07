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
    let errors = { login : ''};

    if (err.message.includes('email' || 'password'))
        errors.login = 'Email is invalid or password is invalid';
    return errors;
}

module.exports.uploadErrors = (err) => {
    let errors = { format : '', maxSize : ''};
    if (err.message.includes('Invalid file'))
        errors.format = 'Invalid file type';
    if (err.message.includes('max size'))
        errors.maxSize = 'File too big (max size is 500kb)';
    return errors;
}