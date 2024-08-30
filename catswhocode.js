// Regular expression for phone number
const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;

// Regular expression for email address
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Test phone number
const phoneNumber = '123-456-7890';
if (phoneNumberRegex.test(phoneNumber)) {
    console.log('Valid phone number');
} else {
    console.log('Invalid phone number');
}

// Test email address
const emailAddress = 'test@example.com';
if ((emailRegex.test(emailAddress)) {
    console.log('Valid email address');
} else {
    console.log('Invalid email address');
})
