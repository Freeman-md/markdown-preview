const clipboard = new ClipboardJS('.copyToClipboard');

clipboard.on('success', function(e) {
  $.toast('Markdown copied')
  console.log(e.action)

  e.clearSelection();
});

clipboard.on('error', function(e) {
  $.toast('An error has occurred')
});

const handleChange = (e) => {
  setTimeout(convertToHTML(e.target.value), 500)
}

$('#content').on('input', handleChange)
$('#markdownForm').on('submit', (e) => e.preventDefault())

const convertToHTML = (content) => {
  $.ajax({
    url: "/process.php",
    type: 'POST',
    data: { content },
    success: function( result ) {
      $('#htmlOutput').html(result)
    }
  });
}