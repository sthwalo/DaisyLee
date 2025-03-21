class Booking {
    private $id;
    private $userId;
    private $eventId;
    private $date;

    public function __construct($userId, $eventId, $date) {
        $this->userId = $userId;
        $this->eventId = $eventId;
        $this->date = $date;
    }

    public function getId() {
        return $this->id;
    }

    public function getUserId() {
        return $this->userId;
    }

    public function getEventId() {
        return $this->eventId;
    }

    public function getDate() {
        return $this->date;
    }

    public function save() {
        // Code to save booking to the database
    }

    public static function find($id) {
        // Code to retrieve booking from the database by ID
    }

    public static function all() {
        // Code to retrieve all bookings from the database
    }
}