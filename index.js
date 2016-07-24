var protobuf = require('protobufjs');

module.exports = protobuf.loadProtoFile("data/POGOProtos.proto").build('POGOProtos');
