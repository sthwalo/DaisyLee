<?php

use PHPUnit\Framework\TestCase;

class EmailTest extends TestCase
{
    protected $emailService;
    protected $emailController;

    protected function setUp(): void
    {
        $this->emailService = new EmailService();
        $this->emailController = new EmailController($this->emailService);
    }

    public function testSendConfirmationEmail()
    {
        $result = $this->emailController->sendConfirmationEmail('test@example.com', 'Event Name');
        $this->assertTrue($result);
    }

    public function testSendCancellationEmail()
    {
        $result = $this->emailController->sendCancellationEmail('test@example.com', 'Event Name');
        $this->assertTrue($result);
    }
}