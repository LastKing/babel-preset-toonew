/**
 * Created by Rain on 2017/2/22.
 */
module.exports = {
  plugins: [
    // stage-1
    require("babel-plugin-transform-decorators"),

    // es2015
    require("babel-plugin-transform-es2015-modules-commonjs"),
  ]
};