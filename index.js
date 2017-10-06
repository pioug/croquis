const { exec } = require('shelljs');

exec('./sketchtool/bin/sketchtool export slices example.sketch --formats=svg --output=dist/svg --overwriting=YES');
