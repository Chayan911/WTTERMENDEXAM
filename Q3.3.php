<?php
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "Chayan\n";
fwrite($myfile, $txt);
$txt = "Hi I am Chayan ,roll no : A055,from batch 3and currently pursuing MCA from MPSTME";
fwrite($myfile, $txt);
fclose($myfile);
?>