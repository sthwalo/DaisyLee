<?php

return [
    'driver' => 'pgsql',
    'host' => getenv('DB_HOST') ?? 'localhost',
    'port' => getenv('DB_PORT') ?? '5432',
    'database' => getenv('DB_NAME') ?? 'daisylee',
    'username' => getenv('DB_USER') ?? 'daisylee_user',
    'password' => getenv('DB_PASSWORD') ?? 'your_secure_password',
    'charset' => 'utf8',
    'schema' => 'public',
    'sslmode' => 'prefer'
];
?>