import React from "react";
import { Avatar } from "native-base";

const CustomAvatars = ({ size, imagen }) => {
    return <Avatar size={size} source={{ uri: imagen }} />
}

export default CustomAvatars