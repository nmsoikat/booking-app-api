const StringUtil = {
    trimStringProperties: (obj) => {
        if (obj !== null && typeof obj === 'object') {
            for (const prop in obj) {
                // if the property is an object trim it too
                if (typeof obj[prop] === 'object') {
                    StringUtil.trimStringProperties(obj[prop]);
                }

                // if it's a string remove begin and end white spaces
                if (typeof obj[prop] === 'string') {
                    obj[prop] = obj[prop].trim();
                }
            }
        }
    }
}

module.exports = StringUtil