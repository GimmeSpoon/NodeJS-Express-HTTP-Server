/* Simple Logger using Winston Module */

const {createLogger, format, transports} = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const format_console = format.printf(({level, message})=>{return `${level} : ${message}`;});
const format_file = format.printf(({level, message, timestamp})=>{return `[${timestamp}] ${level} : ${message}`;});

const logger = createLogger({    
    transports:[
        new winstonDaily({
            level:'debug',
            dirname: './log',
            filename: 'popcon_%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 60,
            timestamp:true,
            format: format.combine(
                format.timestamp(),
                format_file
            )
        }),
        new transports.Console({
            level:'info',
            colorize:true,
            format: format.combine(
                format.colorize(),
                format_console
            ),
        })
    ]
});

module.exports = logger;