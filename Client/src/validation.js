

export default function validate(email,password)
{
    const regexEmail =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/; 

    const result = {
        password: false,
        email: false

    }

        if(regexPassword.test(password))
            result.password = true;

            if(regexEmail.test(email))
            result.email = true;


            return result;





}


  


