export const sendEmail = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ formData })
    });

    return response;
  } catch (error) {
    console.error('Error sending message:', error.message);
  }
};
