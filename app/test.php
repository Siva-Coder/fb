<?php
$msg = [];
// Your code here!
$url = 'https://www.facebook.com/191326448444459/videos/649538362542505/';
$context = [
    'http' => [
        'method' => 'GET',
        'header' => "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.47 Safari/537.36",
    ],
];
 
$context = stream_context_create($context);
$data = file_get_contents($url, false, $context);
//echo $data;
  $title = '';
    if (preg_match('/h2 class="uiHeaderTitle"?[^>]+>(.+?)<\/h2>/', $data, $matches)) {
        $title = $matches[1];
    } elseif (preg_match('/title id="pageTitle">(.+?)<\/title>/', $data, $matches)) {
        $title = $matches[1];
}
echo $videoTitle = html_entity_decode(strip_tags($title), ENT_QUOTES, 'UTF-8') . "<br>";
 
 $regex = '/sd_src_no_ratelimit:"([^"]+)"/';
    if (preg_match($regex, $data, $match)) {
         echo $linkSD =  $match[1];
    }
?>
