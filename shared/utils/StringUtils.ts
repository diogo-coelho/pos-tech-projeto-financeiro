export const formatNumberToMonetaryValueString = (number: number): string => {
    const integer = number | 0;
    return `R$ ${ integer.toString() },00`
}