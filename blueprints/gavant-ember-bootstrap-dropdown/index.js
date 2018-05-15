/* eslint-env node */
'use strict';

const path = require('path');
const fs = require('fs');

module.exports = {
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    let importStatement =
        '\n@import "node_modules/animate.css/source/zooming_entrances/zoomIn"\n' +
        '@import "node_modules/animate.css/source/zooming_exits/zoomOut";\n' +
        '@import "gavant-ember-bootstrap-dropdown";\n';

    let stylePath = path.join('app', 'styles');
    let file = path.join(stylePath, 'app.scss');

    if (!fs.existsSync(stylePath)) {
        fs.mkdirSync(stylePath);
    }
    if (fs.existsSync(file)) {
        this.ui.writeLine(`Added import statement to ${file}`);
        return this.insertIntoFile(file, importStatement, {});
    } else {
        fs.writeFileSync(file, importStatement);
        this.ui.writeLine(`Created ${file}`);
    }

    return this.addPackagesToProject([
        {name: 'ember-basic-dropdown'},
        {name: 'animate.css'}
    ]);
  }
};
