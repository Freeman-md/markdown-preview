<?php

use Michelf\Markdown;
use Michelf\MarkdownExtra;

require 'vendor/autoload.php';

if (isset($_POST['content']) && !empty($_POST['content'])) {
  $content = $_POST['content'];
  $html = MarkdownExtra::defaultTransform($content);
  echo $html;
}

?>