
export const generateRandomString = () :{name:string, email:string, password:string} => {

    const length = 8;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let name = '';
    let email: string;
    let password = ''

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        name += characters.charAt(randomIndex);
        password += characters.charAt(randomIndex);

    }
    email = name + '@'+'mailinator.com'.toString();

    return {name, email, password}

}




