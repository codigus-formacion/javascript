class BaseError extends Error {
    constructor(name, statusCode, isOperational, description) {
        super(description)

        this.name = name
        this.statusCode = statusCode
        this.isOperational = isOperational
        Error.captureStackTrace(this)
    }

    toString() {
        return `BaseError: ${this.message}`
    }
}

class InternalError extends BaseError {
    constructor(description) {
        super('Internal Error', 500, true, description)
    }

    toString() {
        return `InternalError: ${this.name} (${this.statusCode}): ${this.message}`
    }
}

try {
    throw new Error('Error 501')
} catch (e) {
    console.error(e)
}

try {
    throw new BaseError('Base Error', 502, true, 'Base Error 502')
} catch (e) {
    console.log(e.toString())
    console.error(e)
}

try {
    throw new InternalError('Internal Error 500')
} catch (e) {
    console.log(e.toString())
    console.error(e)
}