function showRepositories(event, data) {
  // BEFORE
  // console.log(this.responseText)
  // let repoList = "<ul>"
  //   for(let i=0; i < this.responseText.length; i++) {
  //     repoList += "<li>" + this.responseText[i]["name"] + "</li>"
  //   }
  // repoList += "</ul>"

  //AFTER: Parsing JSON
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + '</li>').join('')}</ul>`

  document.getElementById("repositories").innerHTML = repoList
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories)
  req.open("GET", "http://api.github.com/users/octocat/repos")
  req.send()
}
