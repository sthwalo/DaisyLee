<?php

class BookingService {
    private $bookingModel;

    public function __construct() {
        $this->bookingModel = new Booking();
    }

    public function validateBookingData($data) {
        // Validate booking data (e.g., check required fields, date format)
        if (empty($data['userId']) || empty($data['eventId']) || empty($data['date'])) {
            throw new Exception("Invalid booking data.");
        }
        // Additional validation logic can be added here
    }

    public function createBooking($data) {
        $this->validateBookingData($data);
        return $this->bookingModel->save($data);
    }

    public function getBooking($id) {
        return $this->bookingModel->find($id);
    }

    public function cancelBooking($id) {
        return $this->bookingModel->delete($id);
    }
}