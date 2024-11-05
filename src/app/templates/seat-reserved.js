'use strict';

module.exports.htmlTemplate = (username) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ticket Confirmation</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: #007bff;
                color: #ffffff;
                padding: 20px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 20px;
            }
            .content p {
                margin: 0 0 10px;
                line-height: 1.6;
            }
            .footer {
                background: #f8f9fa;
                color: #6c757d;
                text-align: center;
                padding: 10px;
                font-size: 14px;
            }
            .button {
                display: inline-block;
                padding: 10px 20px;
                margin: 20px 0;
                color: #ffffff;
                background: #007bff;
                text-decoration: none;
                border-radius: 4px;
                text-align: center;
            }
            .button:hover {
                background: #0056b3;
            }
            a.button{
                color: #ffffff;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>EventaBD</h1>
            </div>
            <div class="content">
                <p><strong>Dear ${username}</strong>,</p>
                <p>Thank you for choosing EventaBD. We are pleased to inform you that your ticket has been successfully confirmed.</p>
                <p>Please log in to your eventa profile for further details.</p>
                <a href="https://eventabd.com/user" class="button">View Details</a>
                <p>If you have any questions, feel free to reach out to us.</p>
                <p>Best regards,<br>The EventaBD Team</p>
            </div>
            <div class="footer">
                &copy; ${(new Date()).getFullYear()} EventaBD. All rights reserved.
            </div>
        </div>
    </body>
    </html>
    `
}