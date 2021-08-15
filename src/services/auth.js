import {useState} from "react";

import { loginRequest } from "./actions/auth";
import { setCookie } from "./utils";

const auth = {
    isAuthenticated: false,
    signIn(cb) {
        auth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signOut(cb) {
        auth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

export function useAuth() {
    const [user, setUser] = useState(null);

    const signIn = async form => {
        const data = await loginRequest(form)
            .then(res => {
            let authToken = undefined;
            console.log('res', res);
            res.headers.forEach(header => header.startsWith('Bearer ') ? authToken = header.split(' ')[1] : header);
            if (authToken) {
                setCookie('token', authToken);
            }
            return res.json();
        })
            .then(data => data);;
        console.log(data);

        // return auth.signIn(() => {
        //     console.log(form);
        //     // Временные данные, которые будут доступны приложению
        //     // setUser({ id: 1337, name: 'David' });
        //     // cb();
        // });
    };

    const signOut = cb => {
        return auth.signOut(() => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signIn,
        signOut
    };
}