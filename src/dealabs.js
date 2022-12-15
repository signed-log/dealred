/* eslint-disable no-undef */
const targets = ['https://dealabs.digidip.net/*', 'https://www.smartredirect.de/redir/clickGate.php*'];

function redirect(requestDetails) {
  const params = new URLSearchParams(requestDetails.url.split('?')[1]);
  const url = params.get('url');
  return {
    redirectUrl: url,
  };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  redirect,
  { urls: targets },
  ['blocking'],
);
