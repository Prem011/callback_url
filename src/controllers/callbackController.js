const verifyChecksum = require('../utils/verifyChecksum');

exports.handleCallback = (req, res) => {
    const { event, status, data, checksum } = req.body;
    const key = process.env.SECRET_KEY;

    if (event === 'TRANSFER_STATUS_UPDATE') {
        if (verifyChecksum(data, checksum, key)) {
            console.log('Payment Status Update:', status);
            console.log('Payment Data:', data);

            return res.status(200).json({
                status: 'success',
                message: 'Data received'
            });
        } else {
            return res.status(400).json({
                status: 'error',
                message: 'Checksum verification failed'
            });
        }
    } else {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid event type'
        });
    }
};
