( async () => {

const response = await fetch ( 'https://raw.githubusercontent.com/sstefanofm/fetch-raw--delete/master/MOCK_DATA.json' )

console.log ( await response.json () )

}) ()

