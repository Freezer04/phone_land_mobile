import axios from "axios"
import React from "react";

const AppURL = " http://192.168.137.1:3000/api/user";

export function Login(data) {
    return axios.post(`${AppURL}/login`, data);
}

export function register(data) {
    return axios.post(`${AppURL}/register`, data);
}