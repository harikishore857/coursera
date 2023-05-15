import {generateFullName, generatePassword, generateRandomEmail} from '../utilities/utils';

export const userDetails = {
    email: generateRandomEmail(),
    name: generateFullName(),
    password: generatePassword(9)
}