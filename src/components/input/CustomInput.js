import React from 'react'
import { Box, FormControl, Input, WarningOutlineIcon } from 'native-base'
import { naranja_oscuro } from '../../helpers/Colors'

const CustomInput = ({
    label,
    value,
    setValue,
    placeholder,
    error,
    errorMessage,
    width,
    boxStyles,
    variant
}) => {

    return (
        <Box alignItems="center" w={"100%"} style={boxStyles}>
            <FormControl isInvalid={error} w={width ? width : "75%"}>
                <FormControl.Label style={{ color: naranja_oscuro }}>{label}</FormControl.Label>
                <Input
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    placeholder={placeholder}
                    //style
                    variant={variant ? variant : "underlined"}
                    focusOutlineColor={error ? "#e3001b" : naranja_oscuro}
                    borderColor={error ? "#e3001b" : "gray.400"}
                    fontSize={"md"}
                    w={"100%"}
                    backgroundColor={"white"}
                />
                <FormControl.ErrorMessage alignSelf={"center"} leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errorMessage}
                </FormControl.ErrorMessage>
            </FormControl>
        </Box>
    )
}

export default CustomInput