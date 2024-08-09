// const crypto = require('crypto');
// require('dotenv').config(); // Load .env file

// function verifyChecksum(data, checksum) {
//     const secret = process.env.X_CLIENT_SECRET;
//     if (!secret) {
//         throw new Error("Secret key is undefined. Make sure the X_CLIENT_SECRET is set in the .env file.");
//     }

//     const hash = crypto.createHmac('sha256', secret)
//                        .update(JSON.stringify(data))
//                        .digest('hex');
//     return hash === checksum;
// }

// module.exports = verifyChecksum;


const crypto = require('crypto');
require('dotenv').config(); // Load .env file

function verifyChecksum(data, checksum) {
    const secret = process.env.X_CLIENT_SECRET;
    if (!secret) {
        throw new Error("Secret key is undefined. Make sure the X_CLIENT_SECRET is set in the .env file.");
    }

    // Correctly concatenate the necessary fields in the required order
    const dataToConcatenate = data["puyout id"] + data.amount + data.beneficiary_account_number + data.UTR + secret;

    const hash = crypto.createHmac('sha256', secret)
                       .update(dataToConcatenate)
                       .digest('hex');

    return hash === checksum;
}

module.exports = verifyChecksum;
