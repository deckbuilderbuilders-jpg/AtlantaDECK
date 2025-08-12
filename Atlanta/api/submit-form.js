const fetch = require('node-fetch');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    try {
      // Save to Baserow
      const baserowResponse = await fetch(`https://api.baserow.io/api/database/rows/table/${process.env.BASEROW_TABLE_ID}/?user_field_names=true`, {
        method: 'POST',
        headers: {
          Authorization: `Token ${process.env.BASEROW_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      if (!baserowResponse.ok) {
        throw new Error('Failed to save to Baserow');
      }

      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to process form submission' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
