"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RendererOptions_1 = require("../RendererOptions");
var ConvertersOptions;
(function (ConvertersOptions) {
    ConvertersOptions[ConvertersOptions["TopLevel"] = "top-level"] = "TopLevel";
    ConvertersOptions[ConvertersOptions["AllObjects"] = "all-objects"] = "AllObjects";
})(ConvertersOptions = exports.ConvertersOptions || (exports.ConvertersOptions = {}));
function convertersOption() {
    return new RendererOptions_1.EnumOption("converters", "Which converters to generate (top-level by default)", [
        [ConvertersOptions.TopLevel, ConvertersOptions.TopLevel],
        [ConvertersOptions.AllObjects, ConvertersOptions.AllObjects]
    ], ConvertersOptions.TopLevel, "secondary");
}
exports.convertersOption = convertersOption;
