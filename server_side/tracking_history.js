const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    if (pathname === '/getTrackingDetails' && req.method === 'GET') {
        // Retrieve the tracking details based on the provided tracking number (query.tracking_number)
        // Replace the below object with the logic to retrieve the tracking details from your database
        const trackingDetails = {
            tracking_number: 'EXAMPLE123',
            send_date: '2023-10-30',
            receiving_date: '2023-11-01',
            sender_id: 123,
            receiver_id: 456,
            description: 'Example description',
            weight: 10,
            class: 'Standard',
            postoffice_id: 789,
            status: 'In transit'
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(trackingDetails));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
