
module.exports.procIntegerParams = (option, defaultValue) => option 
  ? Number.parseInt(option) 
  : Number.parseInt(defaultValue)
