const inert = require("@hapi/inert");
const vision = require("@hapi/vision");
const { version } = require("../../package.json");
const hapiswagger = require("hapi-swagger");


const swagger = 
    {
      plugin: hapiswagger,
      options: {
        info: {
          title: "Gamabank - Grupo X",
          description: "Projeto desenvolvido blablablabal balbalbal mimimimi ",
          version: version
        },
      },
    }

module.exports = [inert, vision, swagger ]