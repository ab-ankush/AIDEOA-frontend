
import React from 'react';
import QRCode from 'react-qr-code';

const Payment = ({setStep,amount}) => {

    const upiId = 'vinaynathtiwary-1@okicici'; // Replace with your UPI ID

    // Example QR code data for a payment with your UPI ID
    const qrCodeData = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}&cu=INR`;

    return (
        <div className=" bg-gray-50 flex justify-center ">
           
            <div className="flex  md:flex-row justify-center items-center w-full max-w-6xl px-4">
                
                <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-8  md:mt-0">
                    <h5 className="text-2xl font-semibold mb-4 text-center">Payment QR Code</h5>
                    <p className="text-center mb-6">Scan the QR code to pay ₹{amount}</p>
                    <div className="flex justify-center mb-6">
                        <QRCode value={qrCodeData} size={256} />
                    </div>
                    <div className="text-center mb-6">
                        <h6 className="text-xl font-medium">Amount: ₹{amount}</h6>
                    </div>
                    <div className="text-center">
                        <button
                            onClick={() => alert('Payment simulated')}
                            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                        >
                            Simulate Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
