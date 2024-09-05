const API_URL = 'http://localhost:5000/api';

// Function to make a reservation
export const makeReservation = async (reservationData) => {
    try {
        const response = await fetch(`${API_URL}/reservations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Propagate the error
    }
};

// Function to submit a query
export const submitQuery = async (queryData) => {
    try {
        const response = await fetch(`${API_URL}/queries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(queryData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Propagate the error
    }
};

// Function to fetch carousel items
export const getCarousels = async () => {
    try {
        const response = await fetch(`${API_URL}/carousels`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Propagate the error
    }
};

// Function to fetch popular products
export const getPopularProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/products/popular`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Propagate the error
    }
};

// Function to fetch a product by ID
export const getProductById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/products/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Propagate the error
    }
};

// Function to fetch similar products
export const getSimilarProducts = async (id) => {
    try {
        const response = await fetch(`${API_URL}/products/similar/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch similar products');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching similar products:', error);
        throw error;
    }
};

// Function to add an item to the cart
export const addToCart = async (cartItem) => {
    try {
        const response = await fetch(`${API_URL}/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItem),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Propagate the error
    }
};

// Function to fetch all cart items
export const getCartItems = async () => {
    try {
        const response = await fetch(`${API_URL}/cart`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Propagate the error
    }
};

// Function to clear the cart
export const clearCart = async () => {
    try {
        const response = await fetch(`${API_URL}/cart/clear`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Propagate the error
    }
};

// Function to handle user signup
export const signupUser = async (formData) => {
    try {
        const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Propagate the error
    }
};
