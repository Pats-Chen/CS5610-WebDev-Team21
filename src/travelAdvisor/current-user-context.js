import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../services/users-thunks";


function CurrentUserContext({ children }) {
    const dispatch = useDispatch();
    // const { currentUser } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(profileThunk());
    }, []);
    return children;
}

export default CurrentUserContext;