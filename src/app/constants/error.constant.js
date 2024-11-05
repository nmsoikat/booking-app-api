'use strict';

const ErrorConstant = {
    // USER ERROR
    USER_CREATION_FAIL: 'User creation failed!',
    USER_FETCH_FAIL: 'User fetching error!',
    USER_UPDATE_FAIL: 'User not updated!',
    USER_DELETE_FAIL: 'User deletion failed!',
    USER_NOT_FOUND: 'User not found!',
    USER_ALREADY_EXIST: 'User already exist!',
    USER_NO_LONGER_EXIST: 'The user belonging to this token dose no longer exist!',

    UNAUTHORIZED_ACCESS: 'Unauthorized Access!',

    // AUTH ERROR
    INVALID_CREDENTIAL: 'Incorrect email/phone or password!',
    NOT_LOGIN: 'Your are not logged in!. Please login to get access!',
    EXPIRED_TOKEN: 'Token has expired!',
    TOKEN_CREATION_FAIL: 'Token creation fail!',
    BCRYPT_SALT_FAIL: 'Bcrypt Salt creation fail!',
    HASH_GENERATE_FAIL: 'Hash generating fail!',
    BCRYPT_COMPARE_FAIL: 'Bcrypt compare fail',


    // EVENT ERROR
    EVENT_CREATION_FAIL: 'Event creation failed!',
    EVENT_FETCH_FAIL: 'Event fetching error!',
    EVENT_UPDATE_FAIL: 'Event not updated!',
    EVENT_DELETE_FAIL: 'Event deletion failed!',
    EVENT_NOT_FOUND: 'Event not found!',

    // EVENT SEAT ERROR
    EVENT_SEAT_CREATION_FAIL: 'Event seats creation failed!',
    EVENT_SEAT_BOOKED: 'Sorry, all seats are booked!',
    EVENT_SEAT_SOLD_OUT_REMOVE: 'Your trying remove sold out seat!',

    // EMAIL
    EMAIL_TRANSPORTER_CREATION_FAIL: 'Fail to create email transporter!',
    EMAIL_SENDING_FAILED: 'Email sending failed!',
    EMAIL_DATA_INVALID: 'Please provide receiver address and email body',
};

module.exports = ErrorConstant;

