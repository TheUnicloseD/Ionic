const fs = require('fs')

export function addAlbum(data){
    var table = []
    table.push({title: data.title, artist:data.artist, data_sortie:data.date_sortie, 
                    length: data.length, nbr_song: data.nbr_song, cover: data.cover, spotify: data.spotify});
    console.log(table);
    var json = JSON.stringify(table);
    fs.writeFile('myjsonfile.json', json, 'utf8',function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  }); 
  }

