export function onError(error:any){
  let message = String(error);
  // This actually check whether Object Error has an instane of the error AND whether error has a message
  // Its useful to see when the error is cause by custom object
  if(!(error instanceof Error) && error.message){
    message = String(error.message)
  }
}