const fs = require('fs');
const path = require('path');

// Make the gitupdater script executable
const gitupdaterPath = path.join(__dirname, '..', 'bin', 'gitupdater');
fs.chmodSync(gitupdaterPath, '755'); 