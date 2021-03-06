import Cookies from 'universal-cookie';

const cookie = new Cookies();

const defaultOptions = {
    path: '/',
};

export const getCookie = (name, options={}) => {
    if(!name) return null;
    return cookie.get(name, { ...defaultOptions, ...options});
};

export const setCookie = (name, value, options={}) => {
    if(!name || value === undefined) return null;
    cookie.set(name, value, { ...defaultOptions, ...options});
};

export const removeCookie = (name, options={}) => {
    if(!name) return null;
    return cookie.remove(name, { ...defaultOptions, ...options});    
};