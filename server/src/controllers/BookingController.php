<?php

class BookingController {
    private $bookingService;

    public function __construct($bookingService) {
        $this->bookingService = $bookingService;
    }

    public function createBooking($request) {
        // Logic to create a booking
        $data = $request->getParsedBody();
        return $this->bookingService->createBooking($data);
    }

    public function getBooking($bookingId) {
        // Logic to retrieve a booking
        return $this->bookingService->getBooking($bookingId);
    }

    public function cancelBooking($bookingId) {
        // Logic to cancel a booking
        return $this->bookingService->cancelBooking($bookingId);
    }
}