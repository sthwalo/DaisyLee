-- Terminate existing connections
SELECT pg_terminate_backend(pid) 
FROM pg_stat_activity 
WHERE datname = 'daisylee';

-- Create database if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'daisylee') THEN
    CREATE DATABASE daisylee;
  END IF;
END
$$;

-- Connect to database
\c daisylee;

-- Create schema
\i schema.sql

-- Insert sample data
INSERT INTO event_categories (name, description) VALUES
('Wedding', 'Wedding and engagement events'),
('Corporate', 'Business and corporate events'),
('Birthday', 'Birthday celebrations'),
('Anniversary', 'Anniversary celebrations');

INSERT INTO services (name, description, category) VALUES
('Photography', 'Professional event photography services', 'All'),
('Catering', 'Food and beverage services', 'All'),
('Venue Decoration', 'Event space decoration services', 'All');

INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@example.com', 'hashed_password', 'admin'),
('Regular User', 'user@example.com', 'hashed_password', 'user');

INSERT INTO events (title, description, event_date, event_time, location, user_id) VALUES
('Corporate Meeting', 'Annual shareholders meeting', '2024-01-15', '14:00:00', 'Conference Center', 1);

-- Create user if not exists
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'sthwalonyoni') THEN
    CREATE USER sthwalonyoni WITH PASSWORD 'DaisyLee25';
  END IF;
END
$$;

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE daisylee TO sthwalonyoni;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO sthwalonyoni;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO sthwalonyoni;
