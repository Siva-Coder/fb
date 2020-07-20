const getDownloadLink = async () => {
  $('#result').hide()


  const vid_url = $('#link').val()
  $('#download').val('Grabbing Link ...')
  $('#download').attr('disabled', 'disabled')

  $('#bar').show()

  const formData = new FormData()
  formData.append('url', vid_url)
  let response = await fetch('test.php', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const res = await response.json();
  var a = await response;
  console.log(a);
  console.log(res);
  document.getElementById("demo").innerHTML = JSON.stringify(res);
  vid_url = JSON.parse(res);
//   alert(res);
//   if (res.success) {
//     $('#bar').hide()
//     $('#result').show()

//     $('#title').html(res.title)
//     $('#source').html(`<a class='text-white' href='${vid_url}'>${vid_url}</a>`)

//     $('#links').html('')

//     const links = res.links

//     Object.keys(links).forEach(function (key) {
//       $('#links').append(`<a class="btn btn-info mr-2" href="${links[key]}" role="button">${key}</a>`)
//     })
//   } else {
//     $('#bar').hide()
//     alert(res.message)
//   }

//   $('#download').val('Download!')
//   $('#download').removeAttr('disabled')
}
