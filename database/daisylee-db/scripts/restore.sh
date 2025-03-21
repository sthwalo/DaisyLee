#!/bin/bash

# Restore the PostgreSQL database from a backup

# Variables
DB_NAME="daisylee"
BACKUP_FILE="backup.sql"

# Check if the backup file exists
if [ ! -f "$BACKUP_FILE" ]; then
  echo "Backup file $BACKUP_FILE does not exist."
  exit 1
fi

# Drop the existing database
echo "Dropping existing database $DB_NAME..."
psql -U postgres -c "DROP DATABASE IF EXISTS $DB_NAME;"

# Create a new database
echo "Creating database $DB_NAME..."
psql -U postgres -c "CREATE DATABASE $DB_NAME;"

# Restore the database from the backup
echo "Restoring database $DB_NAME from $BACKUP_FILE..."
psql -U postgres -d $DB_NAME -f "$BACKUP_FILE"

echo "Database $DB_NAME restored successfully."