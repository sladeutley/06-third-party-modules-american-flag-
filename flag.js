#!/usr/local/bin/node

const chalk = require('chalk'); //have to require in chalk according to their documentation

const log = console.log;

log(chalk.white.bgBlue.bold(' * * * * * * * ', chalk.bgRed('                                    ')));
log(chalk.white.bgBlue.bold('  * * * * * *  ', chalk.bgWhite('                                    ')));
log(chalk.white.bgBlue.bold(' * * * * * * * ', chalk.bgRed('                                    ')));
log(chalk.white.bgBlue.bold('  * * * * * *  ', chalk.bgWhite('                                    ')));
log(chalk.white.bgBlue.bold(' * * * * * * * ', chalk.bgRed('                                    ')));
log(chalk.white.bgBlue.bold('  * * * * * *  ', chalk.bgWhite('                                    ')));
log(chalk.white.bgBlue.bold(' * * * * * * * ', chalk.bgRed('                                    ')));
log(chalk.bgWhite('                                                    '));
log(chalk.bgRed('                                                    '));
log(chalk.bgWhite('                                                    '));
log(chalk.bgRed('                                                    '));
log(chalk.bgWhite('                                                    '));
log(chalk.bgRed('                                                    '));

