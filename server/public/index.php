<?php
require_once '../src/config/database.php';
require_once '../src/controllers/BookingController.php';
require_once '../src/controllers/EmailController.php';

$bookingController = new BookingController();
$emailController = new EmailController();

// Simple routing logic
$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestUri = explode('/', trim($_SERVER['REQUEST_URI'], '/'));

if ($requestUri[0] === 'bookings') {
    switch ($requestMethod) {
        case 'POST':
            $bookingController->createBooking();
            break;
        case 'GET':
            $bookingController->getBooking();
            break;
        case 'DELETE':
            $bookingController->cancelBooking();
            break;
        default:
            http_response_code(405);
            echo json_encode(['message' => 'Method Not Allowed']);
            break;
    }
} elseif ($requestUri[0] === 'emails') {
    switch ($requestMethod) {
        case 'POST':
            $emailController->sendConfirmationEmail();
            break;
        case 'DELETE':
            $emailController->sendCancellationEmail();
            break;
        default:
            http_response_code(405);
            echo json_encode(['message' => 'Method Not Allowed']);
            break;
    }
} else {
    http_response_code(404);
    echo json_encode(['message' => 'Not Found']);
}