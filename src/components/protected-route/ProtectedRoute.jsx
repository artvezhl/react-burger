import React from "react";

import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRoute({ children, ...rest }) {
    const user = useSelector(state => state.auth.user);

    return (
        <Route
            { ...rest }
            render={() => user ? (
                children
            ) : (
                <Redirect to="/login" />
            )
            }
        />
    );
}