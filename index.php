<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<title>Canvas Minimo</title>
		<link rel="stylesheet" href="CSS/style.css">
		<script language="javascript" src="JSS/js.js"></script>
	</head>
	<body>

		<h1>Configurando canvas</h1>
		<canvas id="miCanvas" width="1000px" height="500px">
			TU NAVEGADOR NO SOPORTA CANVAS
		</canvas>
		
		<?php
			require 'connection.php';

			$connec = new connection();

			$query="select * from o";
			$conn=$connec->connect();
			$response=$conn->query($query);
			$conn=$connec->disconnect();

			$i=0;

			while($ren=$response->fetch_array()){
				$array[$i]=array("lat" => $ren[1], "long" => $ren[2]);
				$i++;
			}

			$objJson=json_encode($array);

		?>

		<script>
			var json=eval(<?php echo $objJson; ?>);
			drawSalon(json);
		</script>

		
	</body>
</html>