import { UserSession } from '../types';

export function loginSuccessTemplate(userSession: UserSession) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Logging in...</title>
  <style>body { font-family: sans-serif; }</style>
</head>
<body>
  <h1>Logging in...</h1>
  <script>
    window.opener.postMessage(JSON.parse(decodeURI('${encodeURI(JSON.stringify(userSession))}')), '*')
  </script>
</body>
</html>
  `;
}
