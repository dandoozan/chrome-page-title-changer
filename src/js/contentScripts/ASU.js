let originalTitle = document.title;
let url = window.location.href;

//prevent changing the title a second time if it was already changed
if (!originalTitle.includes('[')) {
  //set the title to the first letters of the left-most subdomain. Examples:
  //"https://dev-bios-ws2.ws.asu.edu/scope/plankton-profiles" -> "dbw"
  //"https://dev-ddzn-bios.ws.asu.edu/" -> "ddb"
  //"https://mymultidev-bios-ws2.ws.asu.edu/" -> "mbw"

  let domain = url.split('/')[2];
  let subdomain = domain.split('.')[0];
  let subdomainParts = subdomain.split('-');
  let abbreviation = subdomainParts.map((part) => part[0]).join('');

  document.title = `[${abbreviation}]${originalTitle}`;

  console.log(`*** Changed title to: ${document.title}`);
}
