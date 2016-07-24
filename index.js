var protobuf = require('protobufjs');
var path = require('path');

module.exports = protobuf.loadProtoFile(path.join(__dirname, "data", "POGOProtos.proto")).build('POGOProtos');
