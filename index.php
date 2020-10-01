<?php
error_reporting(E_ERROR | E_PARSE);
$page = $_GET['page'];
echo 'hello';

if ($page == '') $page = 'home';

if ($_SERVER['SERVER_NAME'] == '127.0.0.1') {
  $site_url   = 'http://127.0.0.1:3031/';
} else {
  $site_url = 'https://cindy.lau.im/mywedding/';
}
?>

<html>

<head>
  <title>My Wedding</title>
  <link href="https://fonts.googleapis.com/css?family=Merriweather|Playfair+Display|Raleway&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Cedarville+Cursive&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="http://127.0.0.1:3031/css/style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <meta name="robots" content="noindex">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <div class="phoneHeader">
    <div class="logo"> #Kendy </div>
    <button class="buttonRSVP"><a href="<?php echo $site_url; ?>rsvp">RSVP Here!</a></button>
    <label class="phoneHeaderRightBox" for="toggle">
      Menu
    </label>
  </div>
  <div class="masterbox">
    <?php
    include('header.php');
    include($page . ".php");
    include('footer.php');

    ?>
  </div>
</body>

</html>