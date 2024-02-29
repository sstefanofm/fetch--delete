( async () => {

  const searchFor = { 
    value: 'raw',
    field: 'id'
  }

  const response = await fetch ( 'https://raw.githubusercontent.com/sstefanofm/fetch-raw--delete/master/MOCK_DATA.json' )

  const data = await response.json ()

  console.log ( 'perform search over ' + JSON.stringify ( data ) )
  console.log ( 'with' + JSON.stringify (searchFor) )

} ) ()

