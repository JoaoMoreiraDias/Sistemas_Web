<!DOCTYPE html>

<html lang='pt'>
	<head>
		<meta charset='utf-8'>
		<title>PHP Superglobals e Configuração do Servidor</title>
	</head>
	<body>
		<pre>

<?php

/*
	Sistemas Web
	Demonstração PHP de superglobais, arrays, echo, print_r e da
	função phpinfo para obter as configurações do servidor e cliente.
*/

	echo "\nConteúdo da variável \$_GET:\n";
	print_r($_GET);

	echo "\nConteúdo da variável \$_POST:\n";
	print_r($_POST);

	echo "\nConteúdo da variável \$_REQUEST:\n";
	print_r($_REQUEST);

	echo "\nConteúdo da variável \$_COOKIE:\n";
	print_r($_COOKIE);

	echo "\nConteúdo da variável \$_SESSION:\n";
	print_r($_SESSION);

	echo "\nConteúdo da variável \$_SERVER:\n";
	print_r($_SERVER);

	phpinfo();

?>

		</pre>
	</body>
</html>