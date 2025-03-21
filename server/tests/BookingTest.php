<?php

use PHPUnit\Framework\TestCase;

class BookingTest extends TestCase
{
    protected $bookingController;

    protected function setUp(): void
    {
        $this->bookingController = new BookingController();
    }

    public function testCreateBooking()
    {
        $data = [
            'userId' => 1,
            'eventId' => 2,
            'date' => '2023-10-01'
        ];
        $result = $this->bookingController->createBooking($data);
        $this->assertTrue($result);
    }

    public function testGetBooking()
    {
        $bookingId = 1;
        $result = $this->bookingController->getBooking($bookingId);
        $this->assertNotNull($result);
        $this->assertEquals($bookingId, $result->id);
    }

    public function testCancelBooking()
    {
        $bookingId = 1;
        $result = $this->bookingController->cancelBooking($bookingId);
        $this->assertTrue($result);
    }
}