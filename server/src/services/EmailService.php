<?php

class EmailService {
    private $mailer;

    public function __construct() {
        $this->mailer = new Mailer();
    }

    public function sendConfirmationEmail($userEmail, $bookingDetails) {
        $subject = "Booking Confirmation";
        $body = "Dear User,\n\nYour booking has been confirmed.\nDetails: " . $bookingDetails . "\n\nThank you!";
        return $this->mailer->send($userEmail, $subject, $body);
    }

    public function sendCancellationEmail($userEmail, $bookingDetails) {
        $subject = "Booking Cancellation";
        $body = "Dear User,\n\nYour booking has been cancelled.\nDetails: " . $bookingDetails . "\n\nWe hope to see you again!";
        return $this->mailer->send($userEmail, $subject, $body);
    }
}