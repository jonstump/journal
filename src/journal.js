export function Entry(title,date,body){
  this.title = title;
  this.date = date;
  this.body = body;
} 



Entry.prototype.numberOfWords = function(){
  let bodyArray = body.split();
  return bodyArray.length
}
Entry.prototype.getTeaser = function() {
  if (bodyArray.length > 8){
    let bodyArray = body.split;
    let teaser = bodyArray.slice(0,7);
    return teaser;
  }
  else {
    return bodyArray
  }
}

