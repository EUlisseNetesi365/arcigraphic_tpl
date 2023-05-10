const getValueFromUrl = (string) => {
    const prepValue = string.split('/');
    return prepValue[prepValue.length - 1];
}

