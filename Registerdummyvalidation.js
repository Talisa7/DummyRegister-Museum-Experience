

const  validation = (values) => {

    let errors={};

    if(!values.username){
        errors.username= "Username is required."
    }

    if(!values.email){
        errors.email= "Email is required."
    }

    if(!values.password) {
        errors.password ="Password  is required."
    } else if(values.password.length <5){
            errors.password =" Password must be longer than five characters."
        }

    if(!values.phone){
        errors.phone= "Phone number is required."
    }

    if(!values.date){
        errors.date= "Please enter Date of Birth."
    }

    if(!values.verifypassword) {
        errors.verifypassword ="Confirm password."
    }
    return errors;
};

export default validation;