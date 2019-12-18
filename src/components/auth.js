export const saveUser = (user) => {
    localStorage.setItem('USER_DATA', JSON.stringify(user));
}

export const authUser = JSON.parse(localStorage.getItem("USER_DATA"));

export const checkLogin = () => {
    if(localStorage.getItem("USER_DATA") === null) {
        return false;
    } else {
        return true;
    }
}

export const getToken = () => {
    const user = JSON.parse(localStorage.getItem("USER_DATA"));
    const token = user.data.token;
    return token;
}

export const loggedIn = () => {
    console.log(JSON.parse(localStorage.get("USER_DATA")));
    if(localStorage.getItem("USER_DATA") === null) {
        return false;
    } else {
        return true;
    }
}