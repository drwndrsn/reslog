var middleware

if (process.env.NODE_ENV !== 'production') {
    middleware = function (req, res, next) {
        res._log = []
        res.log = function (description, logItem = {}) {
            if (typeof description === 'string') {
                let obj = {}
                obj[description] = logItem
                res._log.push(obj)
            } else if (description) { // description exists but anything other than string 
                throw new Error('res.log() invalid description')
            } else { // called with no args
                return {reslog: JSON.stringify(res._log, null, 4)}
            }
        } 
        return next()
    }
} else {
    middleware = function (req, res, next) {
        res.log = function () {}
        return next()
    }
}

module.exports = middleware