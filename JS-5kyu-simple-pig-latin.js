function pigIt(str){
  return str.split(' ')
            .map( e => /[a-zA-Z]/.test(e) ? `${ e.slice(1) }${ e.at(0) }ay` : e )
            .join(' ')
}
