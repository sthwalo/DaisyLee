# Database Structure

This directory contains the database schema for the Event Booking System.

## Tables

### Users
- `id`: Primary key
- `name`: User's full name
- `email`: User's email address (unique)
- `password`: Hashed password
- `created_at`: Timestamp of creation
- `updated_at`: Timestamp of last update

### Events
- `id`: Primary key
- `title`: Event title
- `description`: Event description
- `date`: Event date
- `capacity`: Maximum number of attendees
- `price`: Event price
- `created_at`: Timestamp of creation
- `updated_at`: Timestamp of last update

### Bookings
- `id`: Primary key
- `user_id`: Foreign key to users table
- `event_id`: Foreign key to events table
- `booking_date`: Date of the booking
- `status`: Booking status (confirmed/cancelled/pending)
- `created_at`: Timestamp of creation
- `updated_at`: Timestamp of last update

## Indexes
- `idx_user_email`: Index on users.email for faster lookup
- `idx_event_date`: Index on events.date for date-based queries
- `idx_booking_status`: Index on bookings.status for status-based filtering

## Usage

To initialize the database:

```bash
mysql -u your_username -p your_database_name < schema.sql
```
