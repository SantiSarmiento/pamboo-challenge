import { Button } from "native-base";
import React from "react";

const CustomButton = ({
    titulo,
    callBack,
    disabled
}) => {
    return (
        <Button
            onPress={callBack}
            isDisabled={disabled ? disabled : false}
        >
            {titulo}
        </Button>
    )
}

export default CustomButton