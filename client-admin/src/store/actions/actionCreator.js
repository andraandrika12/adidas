import { FETCH_CATEGORIES, FETCH_DETAIL_CATEGORY, FETCH_DETAIL_PRODUCTS, FETCH_PRODUCTS} from "./actionType"
import Swal from "sweetalert2";

const urlBase = 'https://react.andraandrika.xyz/'


export const registerAdmin = (value, callback) => {
    return async (dispatch, getState) => {
        try {
            const response =  await fetch(urlBase + "register", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(value)
            })
                if (response.ok) {
                    callback({ status: true });
                    Swal.fire({
                        icon: "success",
                        title: "Login Successful",
                        text: "You have successfully logged in!",
                    });
                }

        } catch (error) {
            console.log(error.message);

            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message,
            });
        }
    }
}

export const submitLogin = (value, callback) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(urlBase + "login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(value),
            });

            const data = await response.json();

            if (response.ok) {
                callback({ status: true });
                localStorage.access_token = data.access_token;

               
                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    text: "You have successfully logged in!",
                });
            } else {
                throw { ...data };
            }
        } catch (error) {
            console.log(error.message);

            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message,
            });
        }
    };
};


export const fetchProductSuccess = (payload) => {
    return {
        type: FETCH_PRODUCTS,
        payload
    }
}

export const fetchProducts = () => {
    return async function (dispatch, getState) {
        await fetch(urlBase + 'products', { 
            headers: 
            { access_token: localStorage.access_token }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(fetchProductSuccess(data))
            })
    }
}


export const fetchProductDetailSuccess = (payload) => {
    return {
        type: FETCH_DETAIL_PRODUCTS,
        payload
    }
}

export const fetchProductDetail = (id) => {
    return async function (dispatch, getState) {
        await fetch(urlBase + 'products/' + id, { 
            headers: { 
                access_token: localStorage.access_token 
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(fetchProductDetailSuccess(data))
            })
    }
}

export const addProduct = (input) => {
    return async function (dispatch, getState) {
        await fetch(urlBase + 'products', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                access_token: localStorage.access_token 
            },
            body: JSON.stringify(input)
        })
             .then(res => {
                if (!res.ok) throw new Error ("Something went wrong!")
            })
            .catch(err => console.log(err))
    }
}

export const deleteProduct = (id) => {
    return async function (dispatch, getState) {
        await fetch(urlBase + 'products/' + id, {
            method: 'DELETE',
            headers: { access_token: localStorage.access_token }
        })
        dispatch(fetchProducts())
    }
}

export const editProduct = (data, id) => {
    return async function (dispatch, getState) {
        await fetch(urlBase + 'products/' + id, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                access_token: localStorage.access_token
            },
            body: JSON.stringify(data)
        })
    }
}

export const fetchCategorySuccess = (payload) => {
    return {
        type: FETCH_CATEGORIES,
        payload
    }
}

export const fetchCategories = () => {
    return async function (dispatch, getState) {
        try {
            const response = await fetch(urlBase + 'category', { 
                headers: { 
                    access_token: localStorage.access_token 
                } 
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            const action = fetchCategorySuccess(data);
            dispatch(action);
        } catch (error) {
            console.error(error);
        }
    };
};


export const fetchCategoryDetailSuccess = (payload) => {
    return {
        type: FETCH_DETAIL_CATEGORY,
        payload
    }
}

export const fetchCategoryDetail = (id) => {
    return async function (dispatch, getState) {
        await fetch(urlBase + 'category/' + id, { 
            headers: { 
                access_token: localStorage.access_token 
            }
        })
            .then(res => res.json())
            .then(data => {
                const action = fetchCategoryDetailSuccess(data)
                dispatch(action)
            })
    }
}



export const addCategory = (input) => {
    return async function (dispatch, getState) {
        await fetch(urlBase + 'category', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                access_token: localStorage.access_token,
            },
            body: JSON.stringify(input)
        })
    }
}

export const editCategory = (data, id) => {
    return async function (dispatch, getState) {
        await fetch(urlBase + 'category/' + id, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                access_token: localStorage.access_token
            },
            body: JSON.stringify(data)
        })
    }
}

export const deleteCategory = (id) => {
    return async function (dispatch, getState) {
        await fetch(urlBase + 'category/' + id, {
            method: 'DELETE',
            headers: {
                access_token: localStorage.access_token,
            }
        })
        dispatch(fetchCategories())
    }
}

export const fetchImage = () => {
    return async function (dispatch, getState) {
        await fetch(urlBase + 'category', { 
            headers: { 
                access_token: localStorage.access_token 
            } 
        })
            .then(res => res.json())
            .then(data => {
                const action = fetchCategorySuccess(data)
                dispatch(action)
            })
            .then(res => {
                if (!res.ok) throw new Error ("Something went wrong!")
            })
            .catch(err => console.log(err))
    }
}


