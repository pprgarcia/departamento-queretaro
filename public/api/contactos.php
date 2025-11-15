<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

// Conexión a DB (usa tus credenciales de PlanetScale o local)
$host = 'tu-host';
$user = 'tu-user';
$pass = 'tu-pass';
$db = 'tu-db';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
  die(json_encode(['error' => 'Conexión fallida']));
}

$sql = "SELECT * FROM leads ORDER BY fecha_envio DESC";
$result = $conn->query($sql);
$leads = [];

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $leads[] = $row;
  }
}

echo json_encode($leads);
$conn->close();
?>