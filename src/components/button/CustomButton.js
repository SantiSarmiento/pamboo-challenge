import React from "react";
import { Button } from "native-base";

const CustomButton = ({
    titulo,
    callBack,
    disabled,
    width,
    styles
}) => {
    return (
        <Button
            onPress={callBack}
            isDisabled={disabled ? disabled : false}
            w={width ? width : "100%"}
            style={styles}
        >
            {titulo}
        </Button>
    )
}

export default CustomButton