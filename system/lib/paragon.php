<?php session_start();

$client = "4b75e140ac964863aa81eb6b9ab7ab32";
$secret = "N4tGZzSNpWi9AvrVmnKSrICvnetmDk78";

$oauth = curl_init();
curl_setopt_array($oauth, array(
 CURLOPT_URL => "https://oauth.battle.net/token",
 CURLOPT_RETURNTRANSFER => true,
 CURLOPT_POSTFIELDS => "grant_type=client_credentials",
 CURLOPT_USERPWD => $client.":".$secret
));
$json = json_decode(curl_exec($oauth));
$token = $json->access_token;
curl_close($oauth);

if(!empty($_POST)) {
 $battletag = $_POST["battletag"];
 $region = $_POST["region"];
 $difficulty = $_POST["difficulty"];
}
else {
 $battletag = "dewmguy#1248";
 $region = "regionUS";
 $difficulty = "hardcore";
}

list($name,$number) = explode("#",$battletag);
$urltag = "$name%23$number";

switch ($region) {
 case "regionUS": $locale = "en_US"; $domain = "us"; break;
 case "regionEU": $locale = "en_GB"; $domain = "eu"; break;
 case "regionKR": $locale = "ko_KR"; $domain = "kr"; break;
 case "regionTW": $locale = "zh_TW"; $domain = "tw"; break;
}

$bnetapi = curl_init();
curl_setopt_array($bnetapi, array(
 CURLOPT_URL => "https://$domain.api.blizzard.com/d3/profile/$urltag/?locale=$locale&access_token=$token",
 CURLOPT_RETURNTRANSFER => true
));
$json = json_decode(curl_exec($bnetapi));
curl_close($bnetapi);

if (isset($json->reason)) { echo json_encode(array("nonseason"=>"0", "season"=>"0", "error"=>"$json->reason")); }
else {
  $seasonType = $difficulty === "hardcore" ? "Hardcore" : "";
  $nonseason = $json->{"paragonLevel$seasonType"};
  $season = $json->{"paragonLevelSeason$seasonType"};
  echo json_encode(array("nonseason"=>$nonseason, "season"=>$season, "error"=>"0"));
  $_SESSION["battletag"] = $battletag;
  $_SESSION["nonseason"] = $nonseason;
  $_SESSION["season"] = $season;
}

?>