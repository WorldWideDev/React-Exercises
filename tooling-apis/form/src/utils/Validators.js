const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const NameIsValid = (name) => {
    // name should be 8 characters long and not null
    return (!(!name) && name.length > 7) ? true : { field: "name", errors: ["name should be 8 characters long"]};
}

export const EmailIsValid = (email) => {
    // email should be valid email and not null
    return !(!email) && EMAIL_REGEX.test(email) ? true : { field: "email", errors: ["invalid email"]};
}
export default NameIsValid;
