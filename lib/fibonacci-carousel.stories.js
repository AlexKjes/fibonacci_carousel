"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryTest = void 0;
const react_1 = __importStar(require("react"));
const index_1 = require("./index");
const _1_webp_1 = __importDefault(require("./assets/1.webp"));
const _2_webp_1 = __importDefault(require("./assets/2.webp"));
const _3_webp_1 = __importDefault(require("./assets/3.webp"));
const _4_webp_1 = __importDefault(require("./assets/4.webp"));
const _5_jpg_1 = __importDefault(require("./assets/5.jpg"));
const _6_jpg_1 = __importDefault(require("./assets/6.jpg"));
const _7_webp_1 = __importDefault(require("./assets/7.webp"));
const _8_jpg_1 = __importDefault(require("./assets/8.jpg"));
const _9_webp_1 = __importDefault(require("./assets/9.webp"));
exports.default = {
    title: "Gallery"
};
const imageSources = [
    _1_webp_1.default,
    _2_webp_1.default,
    _3_webp_1.default,
    _4_webp_1.default,
    _5_jpg_1.default,
    _6_jpg_1.default,
    _7_webp_1.default,
    _8_jpg_1.default,
    _9_webp_1.default,
];
const GalleryTest = () => {
    const ref = (0, react_1.useRef)(null);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(index_1.FibonacciCarousel, { imageSources: imageSources, cycleTimeMillies: 2000, ref: ref }),
        react_1.default.createElement("button", { onClick: () => { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.previousImage(); } }, "prev"),
        react_1.default.createElement("button", { onClick: () => { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.nextImage(); } }, "next")));
};
exports.GalleryTest = GalleryTest;
