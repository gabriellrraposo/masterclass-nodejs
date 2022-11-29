const os = require('os')
const log = require('./logger')


setInterval(() => {
    const { freemem, totalmem } = os

    let free = (freemem() / 1024 / 1024 / 1024).toFixed(2)
    let total = (totalmem() / 1024 / 1024 / 1024).toFixed(2)
    let usage = (((total - free) / total) * 100).toFixed(2)
        
    let stats = {
        free: `${free} Gb`,
        total: `${total} Gb`,
        usage: `${usage}%`
    }
    
    console.clear()
    console.log("=========== PC STATS ===========")
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)
}, 1000)


