const mongoose = require('mongoose');
const seriesBriefSchema = require(_base + 'schemas/SeriesBrief');

//建立索引，也可以放在程序外部建立
// querySchema.index({key: 1});

module.exports = mongoose.model('SeriesBrief', seriesBriefSchema);
