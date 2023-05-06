import React from 'react'
import { Box, FormControl, Input, WarningOutlineIcon } from 'native-base'
import { titulos } from '../../helpers/Colors'

const CustomInput = ({
    label,
    value,
    setValue,
    placeholder,
    error,
    errorMessage,
    width
}) => {

    return (
        <Box alignItems="center" w={"100%"} mt={10}>
            <FormControl isInvalid={error} w={width ? width : "75%"}>
                <FormControl.Label style={{ color: titulos }}>{label}</FormControl.Label>
                <Input
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    placeholder={placeholder}
                    //style
                    variant={"underlined"}
                    focusOutlineColor={error ? "#e3001b" : titulos}
                    borderColor={error ? "#e3001b" : "gray.400"}
                    fontSize={"md"}
                    w={"100%"}
                />
                <FormControl.ErrorMessage alignSelf={"center"} leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errorMessage}
                </FormControl.ErrorMessage>
            </FormControl>
        </Box>
    )
}

export default CustomInput