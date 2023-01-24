const btn_js = document.getElementById('btn_js');

document.addEventListener('DOMContentLoaded', () => {
btn_js.addEventListener('click', log );
});


function log (){
    ethereum.enable().then(function(addresses) {
  // Retrieve user's Ethereum address
  var address = addresses[0];

  // Use address to log in to your page
  loginWithEthereumAddress(address);
});
}