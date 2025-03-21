# Event Booking System

This project is an Event Booking System built in PHP that handles bookings and email notifications using a MySQL database.

## Features

- Create, retrieve, and cancel bookings.
- Send confirmation and cancellation emails to users.
- User management for booking operations.

## Project Structure

```
event-booking
├── src
│   ├── config
│   │   └── database.php
│   ├── controllers
│   │   ├── BookingController.php
│   │   └── EmailController.php
│   ├── models
│   │   ├── Booking.php
│   │   └── User.php
│   ├── services
│   │   ├── BookingService.php
│   │   └── EmailService.php
│   └── utils
│       └── Mailer.php
├── public
│   └── index.php
├── tests
│   ├── BookingTest.php
│   └── EmailTest.php
├── composer.json 
├── .env
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd event-booking
   ```

3. Install dependencies using Composer:
   ```
   composer install
   ```

4. Set up your `.env` file with your database credentials.

## Usage

- Start the server and navigate to `public/index.php` to access the application.
- Use the API endpoints to manage bookings and send emails.

## Testing

Run the tests using PHPUnit to ensure everything is functioning correctly:
```
./vendor/bin/phpunit
```

## License

This project is licensed under the MIT License.