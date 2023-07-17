/*40.	Album: Write a function called make_album() that builds a Object describing a music album. The
function should take in an artist name and an album title, and it should return a Object containing
these two pieces of information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.*/
// Writing a function
function make_album(artist, album) {
    var More_Info = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        More_Info[_i - 2] = arguments[_i];
    }
    var new_album = {
        artist: artist,
        album: album
    };
    for (var b = 0; b <= More_Info.length - 1; b += 2) {
        new_album[More_Info[b]] = More_Info[b + 1];
    }
    return new_album;
}
var dict_one = make_album('Qari Khushi', 'Tilawat');
console.log(dict_one);
console.log(); //Output is { artist_Name: 'Qari Khushi', album_Name: 'Tilawat' }
var dict_two = make_album('Qari Sadaqat', 'Quran Recitation');
console.log(dict_two);
console.log(); //{ artist_Name: 'Qari Sadaqat', album_Name: 'Quran Recitation' }
var dict_three = make_album('Aziz Mian', 'Qawali');
console.log(dict_three);
console.log(); //{ artist_Name: 'Aziz Mian', album_Name: 'Qawali' }
var dict_four = make_album('Ahmad', 'Naat', 'Tracks', '12', 'Duration', '30 Minutes');
console.log(dict_four);
console.log();
