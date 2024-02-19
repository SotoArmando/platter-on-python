'use strict';
// import { getUpscaler } from "upscaler";
/**
 * A set of functions called "actions" for `upscaler`
 */

module.exports = {
  upscale: async (ctx, next) => {
    try {
      // const Upscaler = require("upscaler"); 
      // const upscaler =  Upscaler("asd")
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
