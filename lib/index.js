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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FibonacciCarousel = void 0;
const react_1 = __importStar(require("react"));
const utils_1 = require("./utils");
require("./style.css");
exports.FibonacciCarousel = (0, react_1.forwardRef)(({ imageSources, cycleTimeMillies = 0 }, ref) => {
    let [state, setState] = (0, react_1.useState)({
        centerIndex: 0,
        displayedSources: Array(9).fill(0).map((_, i) => imageSources[(0, utils_1.calculateIndex)(0, i - 4, imageSources.length)]),
        classIndexes: Array(9).fill(0).map((_, i) => i)
    });
    const intervalRef = (0, react_1.useRef)(null);
    const interval = (0, react_1.useRef)();
    (0, react_1.useImperativeHandle)(ref, () => ({
        nextImage() { shiftRight(); },
        previousImage() { shiftLeft(); }
    }));
    const classes = [
        "n-0-left img-cell",
        "n-1-left img-cell",
        "n-2-left img-cell",
        "n-3-left img-cell",
        "n-4 img-cell",
        "n-3-right img-cell",
        "n-2-right img-cell",
        "n-1-right img-cell",
        "n-0-right img-cell"
    ];
    function shiftLeft() {
        setState(oldState => {
            let newClassIndexes = (0, utils_1.shiftArray)(oldState.classIndexes, 1);
            let newDisplaySources = oldState.displayedSources.slice(0);
            newDisplaySources[newClassIndexes.indexOf(8)] = imageSources[(0, utils_1.calculateIndex)(oldState.centerIndex, -5, imageSources.length)];
            return {
                centerIndex: (0, utils_1.calculateIndex)(oldState.centerIndex, -1, imageSources.length),
                displayedSources: newDisplaySources,
                classIndexes: newClassIndexes
            };
        });
    }
    function shiftRight() {
        setState(oldState => {
            let newClassIndexes = (0, utils_1.shiftArray)(oldState.classIndexes, -1);
            let newDisplaySources = oldState.displayedSources.slice(0);
            newDisplaySources[newClassIndexes.indexOf(0)] = imageSources[(0, utils_1.calculateIndex)(oldState.centerIndex, -5, imageSources.length)];
            return { centerIndex: (0, utils_1.calculateIndex)(oldState.centerIndex, 1, imageSources.length),
                displayedSources: newDisplaySources,
                classIndexes: newClassIndexes };
        });
    }
    (0, react_1.useEffect)(() => {
        if (cycleTimeMillies > 0) {
            intervalRef.current = setInterval(shiftRight, cycleTimeMillies);
            return () => { clearInterval(intervalRef.current); };
        }
    }, [cycleTimeMillies]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "galleryContainer" }, state.displayedSources.map((imgSrc, i) => react_1.default.createElement("img", { className: classes[state.classIndexes[i]], src: imgSrc, onClick: () => {
                clearInterval(intervalRef.current);
                let direction = state.classIndexes[i] - 4;
                let directionAbs = Math.abs(direction);
                direction < 0 ? Array(directionAbs).fill(0).forEach((_, i) => shiftRight()) : Array(directionAbs).fill(0).forEach((_, i) => shiftLeft());
            } })))));
});
