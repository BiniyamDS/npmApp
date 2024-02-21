const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone') // dependent on utc plugin

dayjs.extend(utc)
dayjs.extend(timezone)

// Variables to hold the elements to be changed
const timeZone = document.getElementById('timezone')
const CurTime = document.getElementById('time')
const curDate = document.getElementById('date')

const now = dayjs()
console.log(now.format('HH:mm:ss'))
console.log(now.format('dddd, D MMMM, YYYY'))
const timeZ = dayjs.tz.guess().replace('/', ' / ').replace('_', ' ')
console.log(timeZ)
timeZone.textContent = timeZ
CurTime.textContent = now.format('hh:mm:ss')
curDate.textContent = now.format('dddd, D MMMM, YYYY')