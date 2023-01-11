
export function getData(count) {
  var GivenDatA = []
  var GivenData = []
  let data= {method:"GET"};
fetch("https://api.publicapis.org/entries",data)
.then((response)=>response.json())
.then((jsonData)=>{
  GivenData.push(jsonData.entries)


  
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
    GivenDatA.push({
      API: GivenData[i][j].API,
      Description: GivenData[i][j].Auth,
      Auth: GivenData[i][j].Cors,
      HTTPS: GivenData[i][j].Description,
      Cors: GivenData[i][j].HTTPS,
      Link: GivenData[i][j].Link
    })
  }
  } 
 })
    return GivenDatA
}

