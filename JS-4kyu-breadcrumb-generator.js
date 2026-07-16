function generateBC(url, separator) {
  let trail = extract_trail(url)
	return trail_to_html_array(trail).join(separator)
}

function trail_to_html_array(trail) {
	result = [html.active(trail.pop())]
  while ( trail.length > 0 ) {
  	let path  = trail_url_path(trail) 
    let crumb = trail.pop()
   	result.unshift(html.link( path, crumb ))
 	} 
  return result
}

function trail_url_path(trail) {
	let parts = trail.slice(1)
	let path  = (parts.length > 0) ? `${parts.join('/')}/` : ''
  return '/' + path
}

let html = {
  link: (link,crumb) => `<a href="${link}">${user_visible_crumb(crumb)}</a>`,
  active: (crumb) => `<span class="active">${user_visible_crumb(crumb)}</span>`,
}

function user_visible_crumb(word) {
  word = word.length > 30 ? acronymize(word) : word
  word = word.replace(/-/g,' ')
  word = word.toUpperCase()
  return word
}
  
function extract_trail(url) {
	let filtered = filter_url(url) 
  let trail = ['home']
  return trail.concat( filtered.split('/').filter( (crumb) => crumb.length > 0 ).slice(1) )
}

function filter_url(url) {
	let filtered = url
  filtered = filtered.replace( /^https?:\/\//, '' )  // Remove protocol
  filtered = filtered.replace( /\.[^\/]*$/, '' )     // Remove Extensions
  filtered = filtered.replace( /\#.*$/, '' )         // Remove Anchors
  filtered = filtered.replace( /\?.*$/, '' )         // Remove queries
  filtered = filtered.replace( /index$/i, '' )       // Remove indexes
	return filtered 
}

function on_ignore_list(word) {
  let ignorelist = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]
  return ignorelist.indexOf(word) !== -1
}

function acronymize(string) {
    let words = string.split(/-/).filter( (word) => !on_ignore_list(word))
    return words.map( (word) => word[0] ).join('')
}
