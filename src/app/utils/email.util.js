'use strict';

const nodemailer = require("nodemailer");
const env = process.env;
const { ErrorConstant } = require('../constants');

const EmailUtil = {
    /**
    * @return {Object} Nodemailer Transport
    */
    createTransporter: () => {
        try {
            return nodemailer.createTransport({
                host: env.EMAIL_HOST,
                port: env.EMAIL_PORT,
                secure: false, // Use `true` for port 465, `false` for all other ports
                auth: {
                    user: env.EMAIL_USER,
                    pass: env.EMAIL_PASSWORD,
                },
            });
        } catch (error) {
            throw new Error(ErrorConstant.EMAIL_TRANSPORTER_CREATION_FAIL)
        }
    },

    /**
    * @param {Object} options { to: ['example@gmail.com', 'username@gmail.com'], subject: 'hello', text: 'hello world!', html: '<p>hello world!</p>'}
    * @return {}
    */
    sendEmail: async ({ to, subject, text, html }) => {
        try {
            if (!to && (!text || !html)) {
                throw new Error(ErrorConstant.EMAIL_DATA_INVALID);
            }

            const receivers = Array.isArray(to) ? to?.join(',') : to;

            // create transporter
            const transporter = EmailUtil.createTransporter();
            const options = {
                from: `${env.EMAIL_USER_FORM}`,
                to: receivers,
                subject: subject || '',
                text: text || '',
                html: html || '',
            }

            // send mail with defined transport object
            const info = await transporter.sendMail(options);
            return info;
        } catch (error) {
            throw new Error(ErrorConstant.EMAIL_SENDING_FAILED)
        }
    }
};

module.exports = EmailUtil;