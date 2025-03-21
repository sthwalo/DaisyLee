<?php

class EmailController {
    
    protected $emailService;

    public function __construct($emailService) {
        $this->emailService = $emailService;
    }

    public function sendConfirmationEmail($userEmail, $bookingDetails) {
        $subject = "Booking Confirmation";
        $body = "Thank you for your booking. Here are your details: " . json_encode($bookingDetails);
        return $this->emailService->sendEmail($userEmail, $subject, $body);
    }

    public function sendCancellationEmail($userEmail, $bookingDetails) {
        $subject = "Booking Cancellation";
        $body = "Your booking has been cancelled. Here are your details: " . json_encode($bookingDetails);
        return $this->emailService->sendEmail($userEmail, $subject, $body);
    }
}